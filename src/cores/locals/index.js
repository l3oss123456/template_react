import defaultStrings from "./localString.json";

const getString = (label, printWarning = true) => {
  const languageCode = process.env.REACT_APP_LANGUAGE_CODE;
  if (strings[label]) {
    return strings[label][languageCode]
      ? strings[label][languageCode]
      : strings[label].en;
  } else {
    if (printWarning) {
      console.log(`String ${label} not found in any language!`);
    }
    return "";
  }
};

let strings = defaultStrings;
const placeholderReplaceRegex = /(\{[\d|\w]+\})/;
const placeholderReferenceRegex = /(\$ref\{[\w|.]+\})/;

export const Strings = {
  local: strings,
  setStrings: (translations) => {
    strings = { ...strings, ...translations };
  },
  getString: (label) => {
    return getString(label);
  },
  formatString: (str, ...valuesForPlaceholders) => {
    let input = str || "";
    if (typeof input === "string") {
      input = getString(str, false) || input;
    }
    const ref = input
      .split(placeholderReferenceRegex)
      .filter((textPart) => !!textPart)
      .map((textPart) => {
        if (textPart.match(placeholderReferenceRegex)) {
          const matchedKey = textPart.slice(5, -1);
          const referenceValue = getString(matchedKey, false);
          if (referenceValue) return referenceValue;
          // lets print it another way so next replacer doesn't find it
          return `$ref(id:${matchedKey})`;
        }
        return textPart;
      })
      .join("");
    return ref
      .split(placeholderReplaceRegex)
      .filter((textPart) => !!textPart)
      .map((textPart) => {
        if (textPart.match(placeholderReplaceRegex)) {
          const matchedKey = textPart.slice(1, -1);
          let valueForPlaceholder = valuesForPlaceholders[matchedKey];
          // If no value found, check if working with an object instead
          if (valueForPlaceholder === undefined) {
            const valueFromObjectPlaceholder =
              valuesForPlaceholders[0][matchedKey];
            if (valueFromObjectPlaceholder !== undefined) {
              valueForPlaceholder = valueFromObjectPlaceholder;
            } else {
              // If value still isn't found, then it must have been undefined/null
              return valueForPlaceholder;
            }
          }

          return valueForPlaceholder;
        }
        return textPart;
      })
      .join("");
  },
};

interface StringConvertable {
  toString: () => string
}

type InterpolatedValue = string | StringConvertable | Array<StringConvertable>

export function html(strings: TemplateStringsArray, ...placeholders: (InterpolatedValue | undefined)[]) {
  return strings
    .flatMap((string, i) => {
      const placeholder = placeholders[i]
      return [string, ...(Array.isArray(placeholder) ? placeholder : [placeholder])]
    })
    .join('')
}

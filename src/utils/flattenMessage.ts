export const flattenMessages = (nestedMessages: { [ index: string ]: any }, prefix: string = '') => {
    return Object.keys(nestedMessages).reduce((messages:  { [ index : string ]: any }, key: string) => {
        let value = nestedMessages[key]
        let prefixedKey = prefix ? `${prefix}.${key}` : key

        if (typeof value === 'string') {
            messages[prefixedKey] = value
        } else {
            Object.assign(messages, flattenMessages(value, prefixedKey))
        }
        return messages
    }, {})
}

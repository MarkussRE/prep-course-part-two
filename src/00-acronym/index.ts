/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

function parse(str: string) {
    let cleanedString = str.replace(/[-_]/g, ' '); // Take the input string (str), find all occurrences of hyphens or underscores, and replace them with an empty string." The result is a new string where hyphens and underscores have been removed.
    
    let newString:string[] = cleanedString.split(/[\s-]+/); // ake the cleaned string (cleanedString), and split it into an array of substrings whenever there is one or more occurrences of a whitespace character or a hyphen."
    
    return newString.map(word => word[0].toUpperCase()).join('');
    
}
    
export { parse };

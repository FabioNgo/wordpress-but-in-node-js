/**
 * Reads entire file into an array
 * @link https://php.net/manual/en/function.file.php
 * @param string filename <p>
 * Path to the file.
 * </p>
 * &tip.fopen-wrapper;
 * @param int flags [optional] <p>
 * The optional parameter flags can be one, or
 * more, of the following constants:
 * FILE_USE_INCLUDE_PATH
 * Search for the file in the include_path.
 * @param resource context [optional] <p>
 * A context resource created with the
 * stream_context_create function.
 * </p>
 * <p>
 * &note.context-support;
 * </p>
 * @return array|false the file in an array. Each element of the array corresponds to a
 * line in the file, with the newline still attached. Upon failure,
 * file returns false.
 * </p>
 * <p>
 * Each line in the resulting array will include the line ending, unless
 * FILE_IGNORE_NEW_LINES is used, so you still need to
 * use rtrim if you do not want the line ending
 * present.
 */
const fs = require('fs');
const readline = require('readline');

export async function file (filename, flags = null, context = null) {
    return fs.readFileSync(filename).split('\n');
}

/**
 * Reads entire file into a string
 * @link https://php.net/manual/en/function.file-get-contents.php
 * @param string filename <p>
 * Name of the file to read.
 * </p>
 * @param bool use_include_path [optional] <p>
 * Note: As of PHP 5 the FILE_USE_INCLUDE_PATH constant can be
 * used to trigger include path search.
 * </p>
 * @param resource context [optional] <p>
 * A valid context resource created with 
 * stream_context_create. If you don't need to use a
 * custom context, you can skip this parameter by &null;.
 * </p>
 * @param int offset [optional] <p>
 * The offset where the reading starts.
 * </p>
 * @param int maxlen [optional] <p>
 * Maximum length of data read. The default is to read until end
 * of file is reached.
 * </p>
 * @return string|false The function returns the read data or false on failure.
 */
export function file_get_contents (filename) {
    return fs.readFileSync(filename);
}

/**
 * Write a string to a file
 * @link https://php.net/manual/en/function.file-put-contents.php
 * @param string filename <p>
 * Path to the file where to write the data.
 * </p>
 * @param mixed data <p>
 * The data to write. Can be either a string, an
 * array or a stream resource.
 * </p>
 * <p>
 * If data is a stream resource, the
 * remaining buffer of that stream will be copied to the specified file.
 * This is similar with using stream_copy_to_stream.
 * </p>
 * <p>
 * You can also specify the data parameter as a single
 * dimension array. This is equivalent to
 * file_put_contents(filename, implode('', array)).
 * </p>
 * @param int flags [optional] <p>
 * The value of flags can be any combination of 
 * the following flags (with some restrictions), joined with the binary OR 
 * (|) operator.
 * </p>
 * <p>
 * <table>
 * Available flags
 * <tr valign="top">
 * <td>Flag</td>
 * <td>Description</td>
 * </tr>
 * <tr valign="top">
 * <td>
 * FILE_USE_INCLUDE_PATH
 * </td>
 * <td>
 * Search for filename in the include directory.
 * See include_path for more
 * information.
 * </td>
 * </tr>
 * <tr valign="top">
 * <td>
 * FILE_APPEND
 * </td>
 * <td>
 * If file filename already exists, append 
 * the data to the file instead of overwriting it. Mutually
 * exclusive with LOCK_EX since appends are atomic and thus there
 * is no reason to lock.
 * </td>
 * </tr>
 * <tr valign="top">
 * <td>
 * LOCK_EX
 * </td>
 * <td>
 * Acquire an exclusive lock on the file while proceeding to the 
 * writing. Mutually exclusive with FILE_APPEND.
 * </td>
 * </tr>
 * </table>
 * </p>
 * @param resource context [optional] <p>
 * A valid context resource created with 
 * stream_context_create.
 * </p>
 * @return int|false The function returns the number of bytes that were written to the file, or
 * false on failure.
 */
export function file_put_contents (filename, data, flags = 0, context = null) {
    return fs.writeFileSync(filename,data,'a');
}

/**
 * Utils > IO
 */
import fs from "fs";
import path from "path";

export class IOUtil {
  /**
   * Return all files inside folder
   * @param {string} folderPath 
   * @param {Array} fileList 
   * @returns {Array<string>}
   */
  static getAllFiles(folderPath, fileList = []) {
    const readFiles = fs.readdirSync(folderPath)

    readFiles.forEach((file) => {
      const filePath = path.resolve(folderPath, file)

      if (fs.statSync(filePath).isDirectory()) {
        fileList = IOUtil.getAllFiles(filePath, fileList)
      } else {
        fileList.push(filePath)
      }
    })

    return fileList
  }
}

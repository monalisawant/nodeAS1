const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.writeFile(fileName, fileContent,(err)=>{
		console.log("file written")
	})
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	console.log("reading file")
	const content=await fs.readFile(fileName,"utf-8")
   console.log(content)

}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.appendFile(fileName,fileContent,(err)=>{
		console.log(fileContent)
	})
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.unlink(fileName,(err)=>{
		console.log(err)
	})
}

myFileWriter("file.txt","hello")
myFileReader("file.txt")
myFileUpdater("file.txt","world")
myFileDeleter("file.txt")


module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }
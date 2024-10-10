    const fs=require('fs').promises;
    const path=require('path')

    async function readFile(fileName) {
        try {
            const readFile=await fs.readFile(fileName,'utf-8')
            console.log(JSON.parse(readFile));
            return JSON.parse(readFile);
        } catch (error) {
            console.log(error);
            return [];
        }
    }
    console.log('File Reading in Process.....')

    readFile('address.json');

    async function writeFile(){
        try {
            const duplicate=await readFile('names.json');
            await fs.writeFile('duplicate.json',JSON.stringify(duplicate,null,2))
        } catch (error) {
            console.log(error);
        }
    }
    console.log('File Writing in Process')
    writeFile()

    const filePath = path.join(__dirname, 'duplicate.json');
    console.log(filePath)
    async function deleteFile(fileName) {
        try {
            
            await fs.unlink(fileName);
            console.log(`File ${fileName} is been delete successfully`)
        } catch (error) {
            console.log(error);
        }
    }

    deleteFile(filePath)


    async function reName(fileName,newName) {
        try {
            await fs.rename(fileName,newName);
            console.log(`The file ${fileName} is renamed Successfully`)
            
        } catch (error) {
            console.log(error);
        }
    }

    reName('infos.json','info.json');

    async function fileInfo(fileName) {
        try {
            const stats=await fs.stat(fileName);
            console.log(stats);
        } catch (error) {
            console.log(error);
        }
    }

    fileInfo('address.json')

    async function checkFileaccess(fileName){
        try {
            await fs.access(fileName)
            console.log(`The file ${fileName} exist`)
        } catch (error) {
            console.log({message:error.message})
        }
    }

    fileInfo('addr.json')
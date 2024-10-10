   const fs=require('fs').promises;

    async function readjosnFile(fileName) {

        try {
            const data=await fs.readFile(fileName,'utf8')
            return JSON.parse(data)
        } catch (error) {
            console.error(error);
            return [];
        }
        
    }

    async function main() {

        try {
            const names=await readjosnFile('names.json')
            const address=await readjosnFile('address.json')
            const bioData = names.map((name) => {
                const matchingAddress = address.find(
                  (address) => address.id === name.id
                );
                return { ...name, ...matchingAddress };
              });
              await fs.writeFile("info.json",JSON.stringify(bioData,null,2));
              console.log("info file created successfully")
           
        } catch (error) {
            console.log(error);
        }
        
    }

    main();
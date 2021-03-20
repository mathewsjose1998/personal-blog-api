const fs = require('fs');
const PATH="./data.json";

class POST{

    get(){

        return this.readData()

    }

    getIndividualBlog(postId){
       const postdata=this.readData()
       const foundpost=postdata.find((postdata)=>postdata.id==postId )
         
       return foundpost;


    }

    add(newpost){

        const currentPosts=this.readData();
        currentPosts.unshift(newpost);
        this.storeData(currentPosts)

    }

    readData(){
        let rawdata=fs.readFileSync(PATH);
        let data=JSON.parse(rawdata);
        return data;
    }

    storeData(rawData){
        let data=JSON.stringify(rawData);
        fs.writeFileSync(PATH,data);

    }


}

module.exports=POST;
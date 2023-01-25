// b7269cfb-198e-4782-a5f1-174b7b2e9bb7

import axios from "axios";

export const getProducts = async () => {
    try {
        const res = await axios.post(
            `https://dev.pricepally.com/api/GetFilterProducts`,
            {
                cat_id:[18],
                sub_cat_id:[],
                offset:"0",
                user_id:"",
                sort_by:"0"
            },
            {
                headers:
                    {
                        "region": "LG",
                        "Content-Type": "application/json",
                    },
            }
        )
        // .then((response) => {
        //     return response.blob();
        // })
        // .then((blob)=>{
        //     var reader = new FileReader();
        //     reader.readAsDataURL(blob);
        //     reader.onloadend = function() {
        //         var base64data = reader.result;
        //         console.log(base64data);
        //     }
        // });
        const data = await res?.body;
        console.log(data);

        // return data;
    } catch (err) {
        console.log(err);
    }
}
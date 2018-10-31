import axios from "axios"
export default {
    //https://m.maizuo.com/v4/api/billboard/home?__t=1540126077400
    getBanner({commit}){
        axios({
            method:"get",
            url:"/v4/api/billboard/home",
            data:{
                __t:new Date().getTime()
            }
        }).then((data)=>{
            commit("getBanner",data.data.data.billboards)
        })
    },
    //https://m.maizuo.com/v4/api/film/now-playing?__t=1540126077435&page=1&count=5
    getnowPlayMovie({commit}){
        axios({
            method:"get",
            url:"/v4/api/film/now-playing?page=1&count=5",
            data:{
                __t:new Date().getTime()
            }
        }).then((data)=>{
            //console.log(data.data.data)
            commit("getnowPlayMovie",data.data.data.films)
        })
    },
    //https://m.maizuo.com/v4/api/film/coming-soon?__t=1540179235327&page=1&count=3
    getUpMovie({commit}){
        axios({
            method:"get",
            url:"/v4/api/film/coming-soon?page=1&count=3",
            data:{
                __t:new Date().getTime()
            }
        }).then((data)=>{
            //console.log(data.data.data.films)
            var data = data.data.data.films
            data.map((item)=>{
                var getTime = item.premiereAt;
                var d = new Date(getTime);
                var m = d.getMonth()+1;
                var day = d.getDate();
                item.date = m + "月" +day + "日上映"
            })
            commit("getUpMovie",data)
        })
    },
    //https://m.maizuo.com/v4/api/film/now-playing?__t=1540182242409&page=1&count=5
    getnowplay({commit}){
        axios({
            method:"get",
            url:"/v4/api/film/now-playing?page=1&count=5",
            data:{
                __t:new Date().getTime()
            }
        }).then((data)=>{
            commit("getnowMovie",data.data.data.films)
            //console.log(data.data.data.films)
        })
    },
    updateMovie({commit},page){
        //console.log(page)
        axios({
            method:"get",
            url:"/v4/api/film/now-playing?page="+page+"&count=7"
        }).then((data)=>{          
            commit("nowPlayMore",data.data.data.films)
           
        })
    } ,
    //https://m.maizuo.com/v4/api/film/4436?__t=1540283139455
    getMovieDetail({commit},val){
       // console.log(val)
        axios({
            method:"get",
            url:"/v4/api/film/"+val,
            data:{
                __t:new Date().getTime()
            }
        }).then((data)=>{ 
                var f = data.data.data.film;
                var getTime = f.premiereAt;
                var d = new Date(getTime);
                var m = d.getMonth()+1;
                var day = d.getDate();
                //console.log(getTime)
                f.premiereAt = m + "月" +day + "日上映"   
                commit("getMovieDetail",data.data.data.film) 
                // console.log(data.data.data.film)     
                //console.log(data.data.data.film.name)                
        })
    }
}
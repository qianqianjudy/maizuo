export default {
    getBanner(state,params){
        state.imgs = params;
    },
    getnowPlayMovie(state,params){
        state.nowplay = params;
    },
    getUpMovie(state,params){
        state.upcom = params;
    },
    nowPlayMore(state,data){
        state.movieMore =[...state.movieMore,...data] 
    },
    getMovieDetail(state,params){
        state.movieDetail = params             
    }
}
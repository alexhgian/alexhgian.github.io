let listener = (...params)=>{};

let SearchService = {
    listen: (fn)=>{listener = fn},
    emit: (data)=>listener(data)
}

export default SearchService;
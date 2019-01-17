var moviesWatched = [
    {
    title: "Kill Bill",
    rating: 5,
    hasWatched: true},
    {
    title: "Donnie Darko",
    rating: 4.5,
    hasWatched: false},
    {
    title: "Matrix",
    rating: 6,
    hasWatched: true},
]

moviesWatched.forEach(function(arr){
    if(arr.hasWatched === true) {
        console.log("You have watched \"" + arr.title + "\" - " + arr.rating + " stars")
    } else {
        console.log("You have not seen \"" + arr.title + "\" - " + arr.rating + "stars")
    }
});
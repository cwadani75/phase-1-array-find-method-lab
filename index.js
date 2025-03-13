function superbowlWin(record) {
    // Find the first object in the record array where the result is "W" (Win)
    let win = record.find(game => game.result === "W");
    
    // If a win is found, return the year; otherwise, return undefined
    return win ? win.year : undefined;
}

// Export the function if you're using Node.js
module.exports = superbowlWin;

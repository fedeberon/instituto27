var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 3000;

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Basic route
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(port, function() {
    console.log('Server is running on port ' + port);
}); 
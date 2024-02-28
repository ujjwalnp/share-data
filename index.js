const express = require('express')
const fs = require('fs')
const path = require('path')
const os = require('os')

const app = express()
const PORT = process.env.PORT || 3000

// Function to find the local IP address
function getLocalIpAddress() {
    const interfaces = os.networkInterfaces()
    for (const interfaceName in interfaces) {
        const interfaceInfo = interfaces[interfaceName]
        for (const info of interfaceInfo) {
            if (!info.internal && info.family === 'IPv4') {
                return info.address
            }
        }
    }
    return '127.0.0.1' // Default to localhost
}

const localIpAddress = getLocalIpAddress()
console.log(`Local IP address: ${localIpAddress}`)

// Directory to share files from (change this to your desired directory)
const sharedDirectory = path.join(__dirname, 'shared_files')

// Middleware to serve static files
app.use(express.static(sharedDirectory))

// Route to handle file download requests
app.get('/download/:fileName', (req, res) => {
    const fileName = req.params.fileName
    const filePath = path.join(sharedDirectory, fileName)

    // Check if file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            // If file does not exist, send 404 response
            res.status(404).send('File not found.')
        } else {
            // If file exists, create a read stream and pipe it to the response
            const fileStream = fs.createReadStream(filePath)
            fileStream.pipe(res)
        }
    })
})

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://${localIpAddress}:${PORT}`)
})

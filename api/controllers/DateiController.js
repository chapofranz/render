const Sails = require("sails/lib/app/Sails");


module.exports = {
 
    
    downloadFile: async function (req, res) {
        const filename = req.query.filename;
        sails.log('Requested filename:', filename);


        const AWS = require('aws-sdk');
        const s3 = new AWS.S3({
            accessKeyId: sails.config.s3accesskey,
            secretAccessKey: sails.config.s3secret,
            region: 'us-west-2'
        });

        const params = {
            Bucket: 'wetebucket',
            Key: filename
        };

        s3.getObject(params, (err, data) => {
            if (err) {
                console.error(err);
                return res.serverError('Fehler beim Herunterladen der Datei.');
            }

            res.setHeader('Content-disposition', 'attachment; filename=' + filename);
            res.setHeader('Content-type', data.ContentType);
            res.send(data.Body);
        });
    }

};



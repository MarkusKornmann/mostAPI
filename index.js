const express = require('express');const app = express();const port = 3062;

app.use(express.json());

app.get('/api',(res)=>{res.send('GET Anfrage ans Ziel');});

app.post('/api',(req,res)=>{console.log('POST-Daten:', req.body); const data = req.body;
    res.send(`POST-Anfrage mit Daten: ${JSON.stringify(data)}`);});

    app.put('/api/:id',(req,res)=>{ const id = req.params.id; console.log('PUT-ID:', id);
        console.log('PUT-Daten:', req.body); const data = req.body;
        res.send(`PUT-Anfrage zum Aktualisieren der ID ${id} mit Daten: ${JSON.stringify(data)}`);
    });

    app.delete('/api/:id',(req,res)=>{const id = req.params.id; console.log('DELETE-ID:', id);
        res.send(`DELETE-Anfrage, Datensatz ID ${id} wurde gelöscht`);
    });

    app.listen(port,()=>{console.log(`Server lüppt auf: http://localhost:${port}`);
});


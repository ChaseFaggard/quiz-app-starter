/* Static Database class */
class Database {
    
    static URL = 'https://api.m3o.com/v1/db/'

    /* << UNIQUE ACCOUNT TOKEN >> */
    static TOKEN = 'NWE5NjEwNTItNzJjZS00ZDM3LTllNzgtZmYyYmQyZTAzM2M5'

    static create(table, question, answer) {
        
    }

    static async get(table, id) {
        let result = await fetch(`${this.URL}/Create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.TOKEN}`,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            body: 
                `{"record": {
                    "id": "${id}",
                    "table": "${table}"
                }}`
        })
    }
}
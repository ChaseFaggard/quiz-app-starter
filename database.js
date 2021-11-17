/* Static Database class */
class Database {
    
    static URL = 'https://api.m3o.com/v1/db/'

    /* << UNIQUE M3O ACCOUNT TOKEN >> */
    static TOKEN = 'NWE5NjEwNTItNzJjZS00ZDM3LTllNzgtZmYyYmQyZTAzM2M5'

    static async get(table, id) {
        let result = await fetch(`${this.URL}/Read`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.TOKEN}`
            },
            body: 
                `{
                    "query": "id == ${id}",
                    "table": "${table}"
                 }`
        })
        return result
    }

    static async create(table, entries) {
        let entriesToStr
        
        for (const [key, value] of Object.entries(entries)) {
            entriesToStr += `"${key}": "${value}, `
        }

        console.log(entriesToStr)

        let result = await fetch(`${this.URL}/Create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.TOKEN}`
            },
            body: `{
                "record": { ${entriesToStr} },
                "table": "${table}"
                }`
        })
    }
}
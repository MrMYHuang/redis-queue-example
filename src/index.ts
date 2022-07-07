import { createClient } from 'redis';

const client = createClient();

async function main() {
    await client.connect();

    await client.set('key', 'value');
    const value = await client.get('key');
}

main();

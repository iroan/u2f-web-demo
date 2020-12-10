import hwTransport from '@ledgerhq/hw-transport-u2f';

const CLA = 0xBC;
const SCRAMBLEKEY = "WIO";

async function main() {
    const transport = await hwTransport.create();
    transport.setScrambleKey(SCRAMBLEKEY);

    const resp = await transport.send(CLA, 0, 0, 0, Buffer.from("0"));
    const version = {
        master: [resp[1], resp[2], resp[3],].join('.'),
        slave: [resp[6], resp[7], resp[8],].join('.'),
    };
    console.log('version:', version);
}

main();
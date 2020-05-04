import { CONSOLE_MESSAGE } from '../app/constants';

const ascii = `
 ______                     _              ______
 | ___ \\                   | |             | ___ \\
 | |_/ /_ __ __ _ _ __   __| | ___  _ __   | |_/ /_   _ _ __ _ __ _   _ ___
 | ___ \\ '__/ _\` | '_ \\ / _\` |/ _ \\| '_ \\  | ___ \\ | | | '__| '__| | | / __|
 | |_/ / | | (_| | | | | (_| | (_) | | | | | |_/ / |_| | |  | |  | |_| \\__ \\
 \\____/|_|  \\__,_|_| |_|\\__,_|\\___/|_| |_| \\____/ \\__,_|_|  |_|   \\__,_|___/

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 Looking to add another Software Engineer to your team?
 I'm always open to new opportunities, just shoot me an email at brandon@burrus.io!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;

const style = 'color:#02a7ff;font-weight:900;';

function logAsciiName() {
  console.log(`%c${ascii}`, style);
}

export default logAsciiName;

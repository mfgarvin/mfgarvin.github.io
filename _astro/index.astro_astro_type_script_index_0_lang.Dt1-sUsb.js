const k=document.getElementById("output"),u=document.getElementById("input"),E=document.getElementById("prompt"),h=[];let f=-1,i="~";const M={user:"guest",hostname:"mfgarvin.com",os:"mfgarvinOS 1.0",kernel:"3.0-viatorem",shell:"mgsh 1.0",terminal:"web-term",cpu:"Mintel 96 Neural Processor",memory:"12GB RAM",funProcesses:[{pid:1,user:"root",mem:"12000",cmd:"logosd"},{pid:7,user:"root",mem:"1024",cmd:"sabbathd",state:"sleeping",wake:"never"},{pid:12,user:"clergy",mem:"2048",cmd:"homily-cache",cache:"stale"},{pid:40,user:"clergy",mem:"4096",cmd:"discernment",state:"running",since:"always"},{pid:72,user:"user",mem:"512",cmd:"pastoral-listen",state:"idle",blocking:!0},{pid:128,user:"user",mem:"768",cmd:"systems-thinking",cannotStop:!0},{pid:256,user:"user",mem:"1024",cmd:"music-thread",nice:-5,leaks:"time"},{pid:314,user:"user",mem:"256",cmd:"overthink",loops:!0},{pid:404,user:"user",mem:"0",cmd:"where-did-i-put-that",retries:"infinite",error:!0},{pid:666,user:"root",mem:"128",cmd:"heresy-scan",falsePositives:"high"},{pid:512,user:"root",mem:"1536",cmd:"grace-daemon",persistent:!0,undocumented:!0}],memTotal:"       ∞      ",memUsed:"5242880",memFree:"7340032",memShared:"communion",memCached:"experience",swapTotal:"2097152",swapUsed:"65536",swapFree:"2031616",filesystems:[{name:"/dev/faith",total:"48000000",used:"8000000",avail:"40000000",mount:"/"},{name:"/dev/hope",total:"16000000",used:"1024",avail:"15998976",mount:"/hope"},{name:"/dev/love",total:"100000000",used:"12000000",avail:"88000000",mount:"/love",reserved:"others"},{name:"tmpfs",total:"512000",used:"511872",avail:"128",mount:"/meetings"}],ip:"192.168.12.12",netmask:"255.255.255.0",broadcast:"192.168.12.255",mac:"c0:01:d0:ae:12:00",txPackets:"moderate",rxPackets:"abundant",collisions:"rare",bootMessages:["[    0.000000] Beginning of all things...","[    0.000001] Let there be light","[    0.042000] Loading kernel (mysteriously)","[    1.200000] Mounting /dev/faith as /","[    2.012000] Starting grace-daemon... done","[    3.141593] Calibrating reason and wonder","[    6.000000] Warning: overthink.service enabled","[   12.000000] Loading 47 commands (8 documented)","[   12.000001] System ready (mostly)","Welcome to mfgarvin.com"]},g=()=>`<span class="prompt-user">${M.user}</span>@<span class="prompt-host">${M.hostname}</span>:<span class="prompt-path">${i}</span>$ `,b={"~":["about.txt","contact.txt","projects/",".secrets"],"~/projects":["README.md"]},T=JSON.parse(document.getElementById("content-data").textContent),L=`<span class="cyan">Available commands:</span>

  <span class="exec clickable" data-cmd="help">help</span>      show this message
  <span class="exec clickable" data-cmd="ls">ls</span>        list files
  <span class="exec clickable" data-cmd="cat about.txt">cat</span>       read a file
  <span class="exec clickable" data-cmd="cd projects">cd</span>        change directory
  <span class="exec clickable" data-cmd="pwd">pwd</span>       print working directory
  <span class="exec clickable" data-cmd="whoami">whoami</span>    who are you?
  <span class="exec clickable" data-cmd="clear">clear</span>     clear the screen
  <span class="exec clickable" data-cmd="neofetch">neofetch</span>  system info

<span class="dim">...not all commands are listed here</span>`;function O(C){k.insertAdjacentHTML("beforeend",C+`
`),document.getElementById("input-line").scrollIntoView({block:"end"})}const W="https://terminal-analytics.mfgarvin.workers.dev";function j(C){const t=C.trim();t.toLowerCase();const s=t.split(/\s+/),x=s[0].toLowerCase(),Q=s.slice(1);if(t&&fetch(`${W}/log`,{method:"POST",body:JSON.stringify({command:t}),headers:{"Content-Type":"application/json"}}).catch(()=>{}),O(`${g()}<span class="cmd">${C}</span>`),!!x)switch(x){case"help":case"man":case"?":case"menu":O(L);break;case"ls":const a=Q.includes("-a")||Q.includes("-la")||Q.includes("-al"),p=Q.includes("-l")||Q.includes("-la")||Q.includes("-al"),r=Q.find(n=>!n.startsWith("-"));let c=i;if(r){let n=r.replace(/\/$/,"");if(n.startsWith("~")||(n=i==="~"?"~/"+n:i+"/"+n),!b[n]){O(`<span class="err">ls: cannot access '${r}': No such file or directory</span>`);break}c=n}if(b[c]){let n=b[c];a||(n=n.filter(e=>!e.startsWith(".")));const l=(e,o)=>{const m=e.endsWith("/"),d=m?`cd ${e.replace(/\/$/,"")}`:`cat ${o==="~"?"":o.replace("~/","")+"/"}${e}`;return`<span class="${m?"dir clickable":e.startsWith(".")?"dim clickable":"clickable"}" data-cmd="${d}">${e}</span>`};if(p){const e=a?`drwxr-xr-x  2 ${M.user}  ${M.user}  4096 Jan  1 00:00 <span class="dir">.</span>
drwxr-xr-x  3 ${M.user}  ${M.user}  4096 Jan  1 00:00 <span class="dir">..</span>
`:"",o=n.map(m=>{const d=m.endsWith("/"),I=d?"drwxr-xr-x":"-rw-r--r--",A=d?"4096":" 512";return`${I}  1 ${M.user}  ${M.user}  ${A} Jan  1 00:00 ${l(m,c)}`}).join(`
`);O(e+o)}else{let e="";a&&(e+='<span class="dir">.</span>  <span class="dir">..</span>  '),n.forEach(o=>{e+=l(o,c)+"  "}),O(e)}}break;case"cat":case"less":case"more":if(!Q[0])O('<span class="err">cat: missing file operand</span>');else{let n=Q[0];i==="~/projects"&&!n.includes("/")&&(n="projects/"+n);const l=T[n]||T[Q[0]];if(l){const e=l.match(/^image:\s*(.+)\n---\n([\s\S]*)$/);O(e?`<div class="img-row"><div class="img-text">${e[2].replace(/\n\n/g,"<br><br>")}</div><img class="img-raw" src="/${e[1].trim()}" alt="${e[1].trim()}" onload="document.getElementById('input-line').scrollIntoView({block:'end'})" /></div>`:l)}else O(`<span class="err">cat: ${Q[0]}: No such file</span>`)}break;case"cd":if(!Q[0]||Q[0]==="~"||Q[0]==="/")i="~";else if(Q[0]===".."||Q[0]==="../")i="~";else if(Q[0]==="projects"||Q[0]==="projects/"||Q[0]==="~/projects")i="~/projects";else{O(`<span class="err">cd: ${Q[0]}: No such directory</span>`);break}E.innerHTML=g();break;case"pwd":O(i==="~"?"/home/guest":"/home/guest/projects");break;case"whoami":O(M.user);break;case"clear":k.innerHTML="";break;case"neofetch":O(`<span class="cyan">            ^</span>
<span class="cyan">           /|\\</span>          <span class="prompt-user">${M.user}</span>@<span class="prompt-host">${M.hostname}</span>
<span class="cyan">          /_|_\\</span>         <span class="dim">--------------</span>
<span class="cyan">         /| + |\\</span>        <span class="cyan">OS:</span> ${M.os}
<span class="cyan">        / |   | \\</span>       <span class="cyan">Host:</span> ${M.hostname}
<span class="cyan">       /  |_._|  \\</span>      <span class="cyan">Kernel:</span> ${M.kernel}
<span class="cyan">      / _.&#39;   &#39;._ \\</span>     <span class="cyan">Shell:</span> ${M.shell}
<span class="cyan">     | |  .---.  | |</span>    <span class="cyan">Terminal:</span> ${M.terminal}
<span class="cyan">     | | |     | | |</span>    <span class="cyan">CPU:</span> ${M.cpu}
<span class="cyan">     | | |     | | |</span>    <span class="cyan">Memory:</span> ${M.memory}
<span class="cyan">     |_|_|_____|_|_|</span>`);break;case"sudo":Q.join(" ").toLowerCase()==="make me a sandwich"?O('<span class="yellow">Okay.</span>'):O(`[sudo] password for guest: <span class="err">
Sorry, user guest is not in the sudoers file.
This incident will be reported.</span>`);break;case"rm":Q[0]==="-rf"&&(Q[1]==="/"||Q[1]==="/*")?O('<span class="err">Nice try.</span>'):O('<span class="err">rm: permission denied</span>');break;case"exit":case"logout":case"quit":O(`<span class="yellow">You can check out any time you like,
but you can never leave...</span>

<span class="dim">(Close the browser tab)</span>`);break;case"vim":case"vi":case"nano":case"emacs":O(`<span class="err">${x}: permission denied (read-only filesystem)</span>`);break;case"sl":O(`<span class="dim">You meant 'ls', right?</span>`);break;case"cowsay":const $=Q.join(" ")||"moo";O(` ${"_".repeat($.length+2)}
< ${$} >
 ${"-".repeat($.length+2)}
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`);break;case"fortune":const v=["You will find what you seek.","A journey of a thousand miles begins with a single step.","The best time to plant a tree was 20 years ago. The second best time is now.","404: Fortune not found.","Pax Christi."];O(v[Math.floor(Math.random()*v.length)]);break;case"date":O(new Date().toString());break;case"uptime":O(` ${new Date().toLocaleTimeString()} up since the beginning of time, 1 user`);break;case"uname":Q[0]==="-a"?O(`${M.os.split(" ")[0]} ${M.hostname} ${M.kernel} #1 SMP PREEMPT_DYNAMIC x86_64 GNU/Linux`):Q[0]==="-r"?O(M.kernel):Q[0]==="-s"?O(M.os.split(" ")[0]):Q[0]==="-n"?O(M.hostname):Q[0]==="-m"?O("x86_64"):O(M.os.split(" ")[0]);break;case"echo":O(Q.join(" "));break;case"ping":const y=Q.includes("-c")?Q[Q.indexOf("-c")+2]||Q[Q.indexOf("-c")+1]:Q.find(n=>!n.startsWith("-")),w=Q.includes("-c")&&parseInt(Q[Q.indexOf("-c")+1])||3;if(y){let n=`PING ${y} (${y}): 56 data bytes
`;for(let l=0;l<Math.min(w,10);l++){const e=(Math.random()*2+.01).toFixed(3);n+=`64 bytes from ${y}: icmp_seq=${l} ttl=64 time=${e} ms
`}n+=`<span class="dim">^C</span>
--- ${y} ping statistics ---
${Math.min(w,10)} packets transmitted, ${Math.min(w,10)} received, 0% packet loss`,O(n)}else O('<span class="err">ping: usage: ping [-c count] host</span>');break;case"matrix":_();break;case"hack":U();break;case"coffee":O(`<span class="yellow">
       ( (
        ) )
      .------.
      |      |]
      \\      /
       \`----'
</span>
<span class="dim">Coffee: the fuel of programmers.</span>`);break;case"42":O("The Answer to the Ultimate Question of Life, the Universe, and Everything.");break;case"xyzzy":O("Nothing happens.");break;case"make":Q.join(" ").toLowerCase()==="me a sandwich"?O('<span class="err">What? Make it yourself.</span>'):O('<span class="err">make: *** No targets specified. Stop.</span>');break;case"apt":case"apt-get":Q[0]==="moo"?O(`         (__)
         (oo)
   /------\\/
  / |    ||
 *  /\\---/\\
    ~~   ~~
...."Have you mooed today?"...`):Q[0]==="install"?O(`<span class="err">E: Could not open lock file - open (13: Permission denied)
E: Unable to acquire the dpkg frontend lock, are you root?</span>`):O('<span class="dim">Usage: apt [options] command</span>');break;case"pacman":O('<span class="yellow">error:</span> you cannot perform this operation unless you are root.');break;case"btw":O("I use Arch btw.");break;case"arch":O("x86_64");break;case"hostname":O(M.hostname);break;case"top":case"htop":const N=M.funProcesses.map(n=>{const l=n.state||"running",e=l==="sleeping"?"S":l==="idle"?"I":"R",o=n.nice!==void 0?String(n.nice):"0",m=n.error?`<span class="err">${n.cmd}</span>`:n.exec?`<span class="exec">${n.cmd}</span>`:n.cmd;return`${String(n.pid).padStart(5)} ${n.user.padEnd(9)} 20 ${o.padStart(3)}   ${String(n.mem).padStart(5)}   ${String(n.mem).padStart(5)} ${e}  ${m}`}).join(`
`);O(`<span class="cyan">  PID USER      PR  NI    VIRT    RES S  COMMAND</span>
${N}

<span class="dim">Press q to quit (just kidding, you can't)</span>`);break;case"ps":if(Q[0]==="aux"||Q.includes("-e")||Q.includes("-ef")){const n=M.funProcesses.map(l=>{const e=l.state==="sleeping"?"S":l.state==="idle"?"I":"R",o=l.error?`<span class="err">${l.cmd}</span>`:l.cmd;return`${l.user.padEnd(9)} ${String(l.pid).padStart(5)}  0.0  ${(parseInt(l.mem)/1024).toFixed(1).padStart(4)} ${e}  00:00:00 ${o}`}).join(`
`);O(`<span class="cyan">USER        PID %CPU  %MEM S      TIME COMMAND</span>
${n}`)}else{const n=M.funProcesses.slice(0,4).map(l=>`${String(l.pid).padStart(5)} pts/0    00:00:00 ${l.cmd}`).join(`
`);O(`  PID TTY          TIME CMD
${n}`)}break;case"free":Q.includes("-h")?O(`              total        used        free      shared  buff/cache
Mem:    ${M.memTotal}      5.0Gi       7.0Gi  ${M.memShared.padStart(11)} ${M.memCached.padStart(11)}
Swap:          2.0Gi      64.0Mi       1.9Gi`):O(`              total        used        free      shared  buff/cache
Mem:    ${M.memTotal.padStart(12)} ${M.memUsed.padStart(11)} ${M.memFree.padStart(11)} ${M.memShared.padStart(11)} ${M.memCached.padStart(11)}
Swap:   ${M.swapTotal.padStart(12)} ${M.swapUsed.padStart(11)} ${M.swapFree.padStart(13)}`);break;case"df":if(Q.includes("-h")){const n=M.filesystems.map(l=>{const e=m=>{const d=parseInt(m);return d>=1e6?(d/1e6).toFixed(0)+"G":d>=1e3?(d/1e3).toFixed(0)+"M":d+"K"},o=Math.round(parseInt(l.used)/parseInt(l.total)*100)||0;return`${l.name.padEnd(14)} ${e(l.total).padStart(6)} ${e(l.used).padStart(6)} ${e(l.avail).padStart(6)} ${String(o).padStart(3)}% ${l.mount}`}).join(`
`);O(`Filesystem       Size   Used  Avail Use% Mounted on
${n}`)}else{const n=M.filesystems.map(l=>{const e=Math.round(parseInt(l.used)/parseInt(l.total)*100)||0;return`${l.name.padEnd(14)} ${l.total.padStart(10)} ${l.used.padStart(8)} ${l.avail.padStart(10)} ${String(e).padStart(3)}% ${l.mount}`}).join(`
`);O(`Filesystem     1K-blocks    Used    Available  Use% Mounted on
${n}`)}break;case"ifconfig":case"ip":O(`lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
    inet 127.0.0.1  netmask 255.0.0.0
    inet6 ::1  prefixlen 128  scopeid 0x10<host>

eth0: flags=4163<UP,BROADCAST,RUNNING>  mtu 1500
    inet ${M.ip}  netmask ${M.netmask}  broadcast ${M.broadcast}
    <span class="dim">ether ${M.mac}</span>
    TX packets: ${M.txPackets}  RX packets: ${M.rxPackets}  collisions: ${M.collisions}`);break;case"curl":case"wget":Q[0]?O(`<span class="err">curl: (6) Could not resolve host: ${Q[0]}
This is a fake terminal, remember?</span>`):O(`<span class="err">curl: try 'curl --help' for more information</span>`);break;case"ssh":O(`<span class="err">ssh: connect to host ${Q[0]||"localhost"} port 22: Connection refused
(You can't SSH out of a website)</span>`);break;case"git":Q[0]==="push"&&Q[1]==="--force"?O(`<span class="err">Whoa there! That's dangerous.</span>`):Q[0]==="blame"?O("It was you. It's always you."):Q[0]==="commit"&&Q.includes("-m")?O(`<span class="yellow">[master 1337abc] ${Q[Q.indexOf("-m")+1]||"fix bugs"}
 420 files changed, 69 insertions(+), 0 deletions(-)</span>`):O('<span class="dim">usage: git <command> [<args>]</span>');break;case"docker":O(`Cannot connect to the Docker daemon at unix:///var/run/docker.sock.
<span class="dim">Is the Docker daemon running?</span>
<span class="dim">(Spoiler: No, this is a website)</span>`);break;case"python":case"python3":O(`Python 3.11.0 (main, Oct 24 2022, 00:00:00)
>>> print("Hello, World!")
Hello, World!
>>> exit()
<span class="dim">(Okay, that's all the Python we have)</span>`);break;case"node":O(`Welcome to Node.js v20.0.0.
> console.log("Hello!")
Hello!
undefined
> <span class="dim">(This is as far as we go)</span>`);break;case"cargo":O(`<span class="yellow">    Compiling</span> website v1.0.0
<span class="yellow">    Finished</span> release [optimized] target(s) in 0.42s`);break;case"gcc":case"g++":case"clang":O(`<span class="err">${x}: fatal error: no input files
compilation terminated.</span>`);break;case"chmod":Q[0]==="777"?O('<span class="err">chmod: Nice try, but we care about security here.</span>'):O('<span class="err">chmod: changing permissions denied</span>');break;case"chown":O(`<span class="err">chown: nice try, you're still just a guest</span>`);break;case"touch":O(`<span class="dim">${Q[0]||"file"}: File created (just kidding, read-only fs)</span>`);break;case"mkdir":O('<span class="err">mkdir: cannot create directory: Read-only file system</span>');break;case"history":h.forEach((n,l)=>{O(`  ${l+1}  ${n}`)});break;case"cal":const S=new Date,P=S.toLocaleString("default",{month:"long"});O(`<span class="cyan">    ${P} ${S.getFullYear()}</span>
Su Mo Tu We Th Fr Sa
          1  2  3  4
 5  6  7  8  9 10 11
12 13 14 15 16 17 18
19 20 21 22 23 24 25
26 27 28 29 30 31`);break;case"yes":O(`y
y
y
y
y
<span class="dim">^C (I stopped it for you. You're welcome.)</span>`);break;case"grep":O(`<span class="dim">grep: No pattern provided
Usage: grep [OPTION]... PATTERN [FILE]...</span>`);break;case"awk":case"sed":O(`<span class="dim">You know ${x}? Impressive.
Unfortunately, I don't.</span>`);break;case"man":Q[0]?O(`No manual entry for ${Q[0]}
<span class="dim">Try 'help' instead.</span>`):O(`What manual page do you want?
<span class="dim">For example: man man</span>`);break;case"lsusb":O(`Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 001 Device 002: ID c0ff:ee00 Coffee Machine USB
Bus 001 Device 003: ID dead:beef Mystery Device`);break;case"lspci":O(`00:00.0 Host bridge: Faith Technologies Inc.
00:01.0 VGA compatible controller: Imagination Unlimited
00:02.0 Network controller: Prayer Wireless Corp.`);break;case"dmesg":O(M.bootMessages.join(`
`));break;case"reboot":case"shutdown":case"poweroff":case"init":O(`<span class="err">System is going down for reboot NOW!</span>
<span class="dim">...</span>
<span class="dim">Just kidding. Refresh the page if you want that.</span>`);break;case"alias":O(`alias ll='ls -la'
alias please='sudo'
alias yeet='rm -rf'
alias yolo='git push --force'`);break;case"which":Q[0]?O(`/usr/bin/${Q[0]}`):O('<span class="err">which: missing argument</span>');break;case"whereis":O(`${Q[0]||"command"}: /usr/bin/${Q[0]||"command"} /usr/share/man/man1/${Q[0]||"command"}.1.gz`);break;case"lolcat":O('<span style="color:#ff0000">Y</span><span style="color:#ff7f00">o</span><span style="color:#ffff00">u</span> <span style="color:#00ff00">f</span><span style="color:#0000ff">o</span><span style="color:#4b0082">u</span><span style="color:#9400d3">n</span><span style="color:#ff0000">d</span> <span style="color:#ff7f00">t</span><span style="color:#ffff00">h</span><span style="color:#00ff00">e</span> <span style="color:#0000ff">r</span><span style="color:#4b0082">a</span><span style="color:#9400d3">i</span><span style="color:#ff0000">n</span><span style="color:#ff7f00">b</span><span style="color:#ffff00">o</span><span style="color:#00ff00">w</span><span style="color:#0000ff">!</span>');break;case"cmatrix":_();break;case"rickroll":F();break;case"nyancat":O(`<span style="color:#ff7f7f">░░░░░░░░░░░░░░░░░░░░░░░░░░░░░</span>
<span style="color:#ff7f7f">░░░░░░░░░░▄▄▄▄▄▄▄▄▄▄▄░░░░░░░░</span>
<span style="color:#ffff7f">░░░░░░░░▄▀░░░░░░░░░░░▀▄░░░░░░</span>
<span style="color:#7fff7f">░░░░░░░█░░▄░░░░▄░░░░░░█░░░░░░</span>
<span style="color:#7fffff">░░░░░░░█░░░░░░░░░░░░░░█░░░░░░</span>
<span style="color:#7f7fff">░░░░░░░█░░░░░░░░░░░░░░█░░░░░░</span>
<span style="color:#ff7fff">░░░░░░░█░░░░░░░░░░░░░░█░░░░░░</span>
<span class="dim">~Nyan!</span>`);break;case"figlet":case"toilet":const D=Q.join(" ")||"Hi";O(`<span class="cyan"> _  _  _
| || |(_)
| __ || |
|_||_||_|</span>
<span class="dim">(Imagine "${D}" in big ASCII letters)</span>`);break;case"telnet":Q[0]?.includes("towel.blinkenlights.nl")?O(`<span class="yellow">A long time ago in a galaxy far, far away....</span>
<span class="dim">(ASCII Star Wars - google it!)</span>`):O(`Trying ${Q[0]||"127.0.0.1"}...
<span class="err">telnet: Unable to connect to remote host</span>`);break;case"factor":Q[0]?O(`${Q[0]}: ${Q[0]} is probably prime (I didn't actually check)`):O('<span class="err">factor: missing operand</span>');break;case"rev":O((Q.join(" ")||"hello").split("").reverse().join(""));break;case"tac":O(`cat spelled backwards, outputs file in reverse.
<span class="dim">Also: I'm a tac, not a cat.</span>`);break;case"shred":O(`<span class="err">shred: Nice try, but we don't destroy things here.</span>`);break;case"dd":O('<span class="err">dd: The disk destroyer has been disabled for your safety.</span>');break;case":(){ :|:& };:":case"fork":O(`<span class="err">Fork bomb detected and neutralized.
Nice try, but this terminal is fork-proof.</span>`);break;case"tree":O(`<span class="dir">.</span>
├── <span class="dir">projects</span>
│   └── README.md
├── about.txt
├── contact.txt
└── <span class="dim">.secrets</span>

1 directory, 4 files`);break;default:O(`<span class="err">${x}: command not found</span>`)}}function _(){const C="ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ012345789Z";let t=0;const s=40;u.disabled=!0;const x=setInterval(()=>{let Q="";for(let a=0;a<50;a++)Q+=C[Math.floor(Math.random()*C.length)];O(`<span style="color:#00ff00">${Q}</span>`),t++,t>=s&&(clearInterval(x),O(`
<span class="cyan">Wake up, Neo...</span>
`),u.disabled=!1,u.focus({preventScroll:!0}))},60)}function U(){const C=["Accessing mainframe...",'Bypassing firewall....... [<span class="exec">OK</span>]','Decrypting hash.......... [<span class="exec">OK</span>]','Injecting payload........ [<span class="exec">OK</span>]','Escalating privileges.... [<span class="exec">OK</span>]','Downloading RAM.......... [<span class="exec">OK</span>]',"",'<span class="err">JUST KIDDING</span>','<span class="dim">This is a personal website, not NORAD.</span>'];u.disabled=!0;let t=0;const s=setInterval(()=>{t<C.length?(O(C[t]),t++):(clearInterval(s),O(""),u.disabled=!1,u.focus({preventScroll:!0}))},500)}function F(){const C=[`@@@M000000M@0QQ0QOQ0MMQQ0@@@@MQQ0M0QCC0OCOQOOOQMM@
@MM0QMMM00@@0QQQ00M0QQOnnCO000M@@@@M0OOOCO0MOCOOOQ
00QQM@@@M00M0QQQMMOxl|;:;:;lu0MMMMMMM0OCCC00OQ000O
QM@M0MMM0@@00QQ0MQx|;;;|lltt|u00MMMMM0OCCCOQQOQ0QQ
M0M0@@M0@@@@0000OnttxuunnCCnttCO0MMM0OOOCCQMM0OOOO
MMQ0@@@MM@@@000MQxtxxxxuuuunxxQOCOQOCCQOCCQMM0QMM0
0Q000@@@0@@@00QQQOuttttxnuunnn00QCQ0QOCOCCQMMQ0@@0
00@M00@@00MM00QM@OCxxxxxunCCnCOOOOQ0M0QCCCO0QOM@0Q
QQ0QQQQQM@M000Q0MQnnuxxunnnnCCOQMMOCQ00OCCCOQOOQOQ
OQ0QOOOQMM@0QQQOOOOQCuuxunnnCOO0M@MOCOCOCCO000OOOQ
0MMMOQQCQMM0QQQ0QCO0QCtlxnunnOt|xnOOOOQOOCOQ0QCOOO
MMM0QMMQO0@0OOOQQCCOQntlxuuuCO;'..':;|lxunC0QCCQ0C
M@MQM@0Q0QM0OOOOOOnuCnxxxttuQC:''.......':;xOOCQ0Q
Q00QMQOQQQOOOOQCx|:'uQOCuxnQO;''.......'''''nQCCO0
OOOOO0MMMOOOnxl:'...tnCCxxxx|.'.......'...''xQQQOC
QQOQMM@MMMQn;'........;tlll|''.....  .....'.lQQ0QO
0QOQM@@@M0Qu:........ :llll;.'.....  .  ..'.lQQ000
MQOQOQMMQOOn;........ :lll|:.'....  .. .....;CQ0QO
0QO0MQQQQ0Qn;........ 'l||;'......  ..  ...'.tOCCQ
0QO0@MQ0MMQn|'   .... '|;;:......   ..  ...'.:CCQ0
0QO00Q0QO0Qnl;'.      '|;;:......  ..   ..''''uOCO
MQQQQM@MQOOOuux'      '|::'......  ..   ....'.xQOC
0QQ000000QCuxxt'      ';:::..........     ..'.lQQO
OOQQ00QQQOutttx:      ';'::. .......      ....|QOO`,`@@@@M00000M@0000QO00MQCnnnunCOOQ0M0QOO0OOOQOOO0MM@
@@M00MMM00@@000Q0MMMQul|;;;;|lxOM@@M0OOOOO0MQOOQOQ
000QM@@@M00M00Q0MMMOxlllttxxuutxQMMMM0QOOO00OQ0M0O
0M@M0MMMM@@000Q0MMMClxuunnCCCCnxOMMMM0QOOOOQQO00QQ
M0M0@@M0@@@@0000QQMOxxxxxunnnnuuQMMM0OOOOOQMM0OQQO
MMQ0@@@MM@@@000MQOQCxxxxxxunnCCCOOQQOO0QOOQMM0QMM0
0Q000@@@M@@@00QQQ00QnuuxxxuCCCnOQO00QOOOOOQMMQ0@@0
00@M00@@0MMM00QM@MMQOCuxxxnCCnOQQQQ0M0QOOOQ0QOM@0Q
Q00Q0QQQM@M000Q0M0OO00CuuxunnnCOQ0QO0M0OCCOOQOQ0Q0
OQ00QOOQMM@0QQQOOOOQMQuuuxxnCnOu;tuunOOOOOO000OOQQ
0MMMQQQOQMM0QQQ0QCQ0MOttuuununQl::'':;|llxnO0QCOOO
MMM0QMMQO0@0QQO00OCnxuxtuuxxu0O|:::''''''':;lCOQ0O
M@MQM@MQ0QM0OOOOCxl;'lCuCuxnOC;:::'''''::::::uQQ0Q
Q00QMQQQ0QQQOnxl;::'':COuxxxx;:::''''''::::::xQCQ0
OOOQO0MMMQOOC;::':''''xOtttt|::::'''''''''':'t0QOO
0QOQM@@@@MQOC:'''''''';tlttl:::'''''.'''''::'l000Q
MQQQM@@@@MQOO|'''''''';l|tl|:::''''..''''':'::u000
M0QQQ0MMQOOOOt'''''''';|;l|;:::''''.'''.'''':':O0O
0QQ0M0QQQMQOOx'''''''.;|:||::::'''..''..''':::'lOQ
0QQM@MQ0MMQOOC;''''''.;|:|;:':''''..''..''::::::nM
0QQ00Q0QQ0QOOOu:.''''.;|:;;'''''''.'''..'''''::;CQ
M0QQQM@MQQOOOCl'.'''..;|:;;''''::::''....'''::'uQC
0QQ00M000QOOOu;:'...'.;|';:'''';||;;'....''':'|QQQ
QQQ00000Onnnnx;:'..''.;|'''''''|ltll;..''''':;nQQQ`,`@@@@000000M@0QQ0QOQ00Ont;::':::;|uQQCC0OCOQOOOQMM@
@MM0QMMM00@@0QQQ00MM0nl|ltxxxuuull0M0OOOCO0MOCOOOQ
00QQM@@@M00M0QQQMMMMMu;xxxunCCCCulOM00OCCC00OQ000O
QM@M0MMM0@@00QQQMMMMMulxttxtunxuuu0MM0OCCCOQQOQ0QQ
M0M0@@M0@@@@0000QQMM0uxxxuxtxnnCnOMM0OOOCCQMM0OOOO
MMQ0@@@MM@@@000MQOOQQCuxxxtxunCCnOQOCCQOCCQMM0QMM0
0Q000@@@0@@@00QQQ00MQOQnxxxunnnCQOQ0QOCOCCQMMQ0@@0
00@M00@@00MM00QMMM0QOOOntttxunnCCC0MM0QCCCO0QOM@0Q
QQ0QQQQQM@M000Q0M0OC0MQnxxtxunuOt:lxCO0OOOOOOOOQOQ
OQ0QOOOQMM@0QQQOOOOQ0OuxxutxuxnO;''..':|lxnQ00OOOQ
0MMMOQQCQMM0QQQ0QCnx|lxltuxxxn0C'''.... ..':|nOOOO
MMM0QMMQO0@0OOCnx;''.:xltnxunQu'''.......'''.:CQ0C
M@MQM@0Q0QM0Ct|:'.....|xxxtttl'''.......''''':CQ0Q
Q00QMQOQQQOOn:........:Cultll:''...... .....''nCO0
OOOOO0MMMOOOC:........:Cxlll;'....... .. ...'.nQOC
QQOQMM@MMMQCO;.........|lll|:.'l|'.   .  .....t00O
0QOQM@@@M0QCC;.........l|||;'.|uxll; ... ....'.l00
MQOQOQMMQOOCO|.........||;;:.'txxtxt.... ...'...tQ
0QO0MQQQQ0QCOx....... .|;;:'.'ltttxt'...  ....'''x
0QO0@MQQMMQCOu'.  ..  .|;::...:ltttt'..........'.l
0QO00Q0QO0QOOn;.      .|:::...':;|||'.:'........|O
MQQQQM@MQOOCCnl:.     .|'''.. .'::::. ::...... lQC
0QQ000000Cxxuux;.  .. .|...    .''''.  .. .'':xQQO
OOQQ00QQQntxxuxt   .. .|::             .  'nOOQOOQ`,`@@@@000000M@0QQ0QOQ00Ont|;;;;;|||;uQCC0OCOQOOOQMM@
@MM00MMM00@@0QQQ00MMMQt|txunnnCCnltM0OOOCO0MQCOOOQ
00QQM@@@M00M0QQQMMMM@Q|lxtxxnnnnCxxMM0OCCC00OQ000O
QM@M0MMM0@@00QQ0MMMMMQxxxtxttnuunuQMM0OCCCOQQOQ0QQ
M0M0@@M0@@@@0000QQMMMCuxxxxxxnCCCn0M0OOOCCQMM0OOOO
MMQ0@@@MM@@@000MQOOQQOCnxxttunCnnOQOCCQOCCQMM0QMM0
0Q000@@@0@@@00QQQ0MMQO0OxxxxunnnOOQQQOCOCCQMMQ0@@0
00@M00@@00MM00QMMM0QOOOCxtttxnnCnuQ0MMQCCCO0QOM@0Q
QQ0QQQQQM@M00QQ0M0OO00QnuxtxnnuOt';lxnOOOOOOQOOQOQ
OQ0QOOOQMM@0QQQOOOCCuxuxxxxxxxCQ;''. .':;lxOQ0OOOQ
0MMMOQQCQMM0QQOOnt|:.;xltuxxuOQu'''........':xOOOO
MMM0QMMQO0@0Cxl;:....:tltuuunCl.''.......'''''CQ0C
M@MQM@0Q0Q00u''.......:txttttl.';:::'...''.'':CQ0Q
Q00QMQOQQQOQx''.......'nuttll:'lt|;;:. .....''nOO0
OOOOO0MMMOOOu'........'nxlll|.;uuxtt; .. ...'.x0OC
QQOQMM@MMMQOx'.........|l|||:.lttxxu;... .....|Q0O
0QOQM@@@M0QOu'.........|l|||'';lttxx;...  ...'.:CM
MQOQOQMMQOOOn:.........||;|:.'':|ttx:.''........:C
0QO0MQQQQ0QCC;.. .... .||;;'..''':;;'.::.......'.:
0QO0@MQQMMQOCl:'. ..  .||;;......'''..;:.......'.:
0QO00Q0QO00OCx|;'  .  .|;;:.      .   ......... :C
MQQQQM@MQOOutttl;  .  .|'''.       .'          |OC
0QQ00M000Qnttuxt;  .  .|:..         .     'l||uQQO
OOQQ00QQQQOnxxt|;ll.  '|;'.              ..nQQQOOQ`,`@@@@000000M@0QQ0QOQ0MQnxl||||;|l|;;CCCQOCOQOOOQMM@
@@M00MMM00@@0QQQ00MMMMn|txxnCCCOOu;C0OOOCO0MQCOOOQ
00QQM@@@M00M0QQQMMMMM@u|xtttxnuunnlOM0OCCC00OQ000O
QM@M0MMM0@@00QQ0MMMMM0nuxxxxtununuCMM0OCCCOQQOQ0QQ
M0M0@@M0@@@@0000QQMMMQuuxxxxtuCOCnQM0OOOCCQMM0OOOO
MMQ0@@@MM@@@000MQOOQQOOCuxxtunCnnCQOCCQOCCQMM0QMM0
0Q000@@@0@@@00QQQ0MMOO0OxxxxunnnOCQ0QOCOCCQMMQ0@@0
00@M00@@00MM00QMMM0QQOOCxxttxunCOOQ000QCCCO0QOM@0Q
QQ0QQQQQM@M0QQQ0M0OCCOOnxxtxnnuOl|unQ00OCCCOOOOQOQ
OQ0QOOOQMM@0QOCnxl;:;xxxxxxxxuOC''.':|tunCO000OOOQ
0MM0OQQCQMMCl|:'....'tllununCQQl'''::'. .:|xCQCOOO
MMM0QMMQO00l..''.....llluuunOC;.':lxuuul'...:nOQ0C
MMMQM@0Q0OC;''.......'lxtxxxx;...;lxuuut:'''.lQO0Q
Q00Q0QOOQOt'..........xntxxxt'....:luuul'....|QCO0
OOOOOQMM0n|...........xntttt|.... .;tuut'....|QQOC
QQOQMMMMMC|... ...... ;tttll'...    .:;;'....:QQQO
0QOQ0M@@0n|..  .    . :llll|....      ...''..'tQ00
MQOQOQMOul:     ';lll||l||l;....         ......|nO
0QO00Qntl::'.:;|xuxxtl;l|||: .           ...... .;
0QO0MMnxl:;';|;|ltttt;:l||;.               ...... 
0QO0QQQul'.':. ';||;' :l||;.                .....:
MQQQQM@0nl::::'...    :|||:                     :n
0QQ0000M00OCCnCt.   . :|;;:                ::::xOQ
OOQQ00QQQQOOOCOC;  ...;;.'. ..         ....uQOQQQO`,`@@@@000000M@0QQ0QOQ0MQCul;::':::;|nOCCQOCOQOOOQMM@
@@M00MMM00@@0QQQ00MMMQxlttxuuunnx;uMQOOOCO0MQOOOOQ
00QQM@@@M00M0QQQMMMMMQ|txxxuCnCOClxM00OCCC00OQ000O
QM@M0MMM0@@00QQQMMMMMOxxxtxtunxuuxOMM0OCCCOQQOQ0QQ
M0M0@@M0@@@@0000QQMMMnuuxxxtxnCCnCMM0OOOCCQMM0OOOO
MMQ0@@@MM@@@000MQOOQQCnuxxtxunCnCOQOCCQOCCQMM0QMM0
0Q000@@@0@@@00QQQ0MMQOQnxxxunnnCOCQ0QOCOCCQMMQ0@@0
00@M00@@00MMQQQMMM0QOOCxtttxunnOQOO000QCCCO0QOM@0Q
QQ0QQQQQM@M0QQQ0M0OCOQCuxxxunnnCO0QCQ00OCCCOOOOQOQ
OQQQOOOQMM@0QOCuxl||xntxxxxuuuOx:lxunOOOOCCQ00OOOQ
0MM0OQQCQ0ntl;:'... xCllunxxnOQ;'...':|tuCO0QQCOOO
MMMQQMMOOC:.........lxllxunO0Ol'''..''''''|uQOCQ0C
MMMQMM0OQt'''.'..... :txtxxun|......:lxxx|.'uOOQ0Q
Q0QO0QOOu;...........'unxxxxt'......'txuuu;.lQOCO0
OOOOOQMC:............'untxxx;....   .;tuux;'tQQQOC
QQOQ0MMu' ...  ...  ..|ttttt'...     'luul:'xQQQQO
0QOQ0MCl..         ...;ttll|....      ;ltl'.lQQQ00
0QOQCt;:.       .:lttllllll: ...      .':;..;uQ0QC
0QOOl'':''. ::..;ttxxut||ll' .           ....|nCOQ
0QOOl''''..''  .|ttttl;||||.               ...';xO
0QO0n:  ........''..  :|||:                 ....:x
MQOQOCxl;:'';:.       :|||:                  ..'xO
0QQ00MM0QOCCCx.       :|||:  .                .xQO
OOQQQQQQQQOOCx'       :;''.              .;;:|nQOO`,`@@@@000000M@0QQ0QOQ00Ox;::':::;tC0QOCCQOCOQOOOQMM@
@MM00MMM00@@0QQQ00MMOxllllllttl;t0MMQOOOCO0MQOOOOQ
00QQM@@@M00M0QQQMMM0ulxxunCCCOCtlQ0000OCCC00OQ000O
QM@M0MMM0@@000QQMM@Mulxttxuuunnxu00MM0OCCCOQQOQ0QQ
M0M0@@M0@@@@0000QQM0CnxxxtxnnnnuOMMM0OOOCCQMM0OOOO
MMQ0@@@MM@@@000MQOOOnnxxxtxnCCnnOOQOCCQOCCQMM0QMM0
0Q000@@@0@@@00QQQ0MMQCuxxxunnnCQQCQ0QOCOCCQMMQ0@@0
00@M00@@00MM0QQMMM0QOCxttxununQOOOQ000QCCCO0QOM@0Q
QQ0QQQQQMMM0QQO0M0OCQCxxxtuunCOQMMOCQQ0OCCCOQOOQOQ
OQQQOOOQMM@0QQOCuxtxOnxxxxunuCnlnQ0OOQOOCCC000OOOQ
0MM0OQQCQQOntl;:'..lQnlluuxxnQl..':|tuCOOOOQ0QCOOO
MMMQQMMOu;''...... tOullunCO0C:'''.. .':lxCQQCCQ0C
MMMQMM0O|.''.......':ttxxuCOu'............;OOOOQ0Q
Q0QO0OOt'............tnnxxxx:............'.uQOOCO0
OOOOCQC'.............lnnxuxl'....   ...::'.uQOQQOC
QQOQ0Mx... ..  ...   |xtxxx;....     .'ltt|uQQQQ0O
0QOO00t..            :ttttl'.....    .|xuuxCQQQ0M0
0QOOCC|        .''::'.|ttl;......    'tuunxuQOQ0QO
0OOOu;'.    .:|txtl|'.;lll: .....    :ltxx:tQOCCCQ
0OOx':;:'.';llttttl;. ;l||'....      ';|l;.;xOOCQ0
0QOC:''...:':;llt|:.  :|;;.           .''.  .;xCCO
MQOQx'.. . .':;:'     :l|:                 ...xQOC
0QQQQCutl|l|..        :||:                 ..uQQQO
OOQQQ000QOOl   .      :|:'                 .xQOOOO`,`@@@@M00000M@0000QO00OuxxlltxCQQQ00QQOO0OOOQOOOQMM@
@@M00MMM00@@000Q0MMOx;;;;;;;||u0@MMM0OOOOO0MQOOQOQ
000QM@@@M00M00Q0MMOuttxxxunnntlQMMMMM0QOOO00OQ0M0O
0M@M0MMMM@@000Q0M@CtuuunCCCOOulOMMMMM0QOOOOQQO00QQ
M0M0@@M0@@@@0000Q0QuxxxxununnuuO0MMM0OOOOOQMM0OQQO
MMQ0@@@MM@@@000MQOOCuxxxuCnCCnCQOOQQOO0QOOQMM0QMM0
0Q000@@@M@@@00QQQ0QOnuuxunCCCCQ0QCQ0QOOOOOQMMQ0@@0
00@M00@@0MMM00QMMM0QCuxxuCCnC0QOOOQ0M0QOCOQ0QOM@0Q
Q00Q0QQQM@M0QQQ000OOCuuuunnnOOOQ00OCQ00OOOOOQQQ0Q0
OQ0QQOOQMM@0OOQOOOCOnuxuunnCCCC0@@MQOOOOOOO000OOQQ
0MM0OQQOQMM0OOCnxtlCCuttnnnuOn:|tuCOOOQQOCOQ0QOOOO
MMMQQMMOOOCut|:''':CQuttuuuC0x::''':;|xnCOOQQOOQ0O
MMMQMM0Cl;:''''''':nCCuuuCQ0C;::::'''''':lOQOOOQ0Q
Q00O0QOt''''''''''''|xCnxunn;:::''::'':::'xQOQOCQ0
OOOOOQQ;'''''''''''.:xCnxxx;':::'::''':::'lQOOQQOO
QQOQ0Mn:'''''''''''.'txxxxt:''''''''''''''|QQQQ00Q
0QOQ0Mn'''''''''''.''lxxtt|''''':|||;::'':;OQQQ0MM
0QOQOQn''''''.....''.;tttt;''''':tuuuxl|;:;OQQQ00O
0QO00Qn'''........''':lttl:'''''|xxuuul|;:|QQOOOOQ
0QO00Qt'..':;;:'...'''lll;'''''':ltxxl;;:'lQQQOC0M
0QOQOt;::lxt|;;'......|l|;.''''..:|ll;::'''lOOOOOQ
MQOQnlltxuuxl;;'......|l|:.........''':''''.:OQQQC
0QQ0O||ttttut:'.......|l|:.........'.'::':';nQQQQQ
QQQ0QCtllltt;.........||;;''........   ...|OQQQQQQ`,`@@@@M00000M@0000QO000QOOQM@@@MQQ000QOO0OOOQOOOQMM@
@@M00MMM00@@000Q00CuxtlllxnO000M@@MM0OOOOO0MQOOQOQ
000QM@@@M00M00Q00Ot;;;;;||||tQ@MMMMMM0QOOO00OQ0M0O
0M@M0MMMM@@000Q0Qnxxxxunnnnt|OM0MMMMM0QOOOOQQO00QQ
M0M0@@M0@@@@0000CxnuunnnCCCulnOO0MMM0OOOOOQMM0OQQO
MMQ0@@@MM@@@000MOCutxxunuunnxQQOOOQQOO0QOOQMM0QMM0
0Q000@@@M@@@00QQOOnxxxnCCCCnnQM0QCQ0QOOOOOQMMQ0@@0
00@M00@@0MMM00QMMQCuuxunCCCCQ0QOOOQ0M0QOOOQ0QOM@0Q
Q00Q0QQQM@M0QQQ0M0OuxunCCnnOQCOQMMQCQ00OOOOOQQQ0Q0
OQ0QQOOQMM@0QOQOOOOnxnuxnnCOOQMMMM0OCOOOOOO000OOQQ
0MM0OQQOQ0MQOOQQQCOuxuttnCnCnxCO0MMMQOQOCOOQ0QOOOO
MMMQQMMOCQ@0OOnut|nCxuttnnuQu:::;|ltuCQQOOOQQOOQ0O
MMMQMM0Q0OOnt|:'''xQOnuuxuO0n:::'''''';|uOOQOOOQ0Q
Q00O0QOnx|::''''''lCOOOCnOQC;:::::::':'''uQOOQOCQ0
OOOOOQO;'''':'''''';txCnuxx:'::::::'':::'lQOOOQQOO
QQOQ0Mn'''''''''''..|uxxuxl:'''''''''''''|OQQQ000Q
0QOQ0Mx''''''''''''.:xxxxt|;ttt|:'':''''':CQQQ00MM
0QOQOQt'''.'.''..''''lxttl;|xuuux;':''''::nQOQQ00O
0QO00Qt''.........''.;ttt|;lxuuut;''''''':OQQOOOOQ
0QO000t''..........'.:ltl|''|tuut:''..''':OQQQOC0M
0QOQQC|'''...........'ltl|'.':|l;''''''''.;QQOOOOQ
MQOOOCl:..............|tl|''....'::'''''''':CQQQQC
0QQQOnnnx:.......''''.|tl|:'....''''''':'.'tOQQQQQ
QOOnxnnnCx:.......'''.|l|;:''............:n0QQQQQQ`,`@@@@000000M@0QQ0QO0000OQ0@@@@MQQ000OCCQOCOQOOOQMM@
@@M00MMM00@@0QQQ0QCnutttunQM000M@@MM0OOOCO0MQOOOOQ
00QQM@@@M00M0QQQQx;:::::;;;lO@MMMMM000OCCC0QOQ000O
QM@M0MMM0@@00QQQCxllltxxxx|:xM00MMMMM0OCCCOQQOQ0QQ
M000@@M0@@@@000OunuunnnCOCu|tOCOQMMM0OOOCCQMM0OOOO
MMQ0@@@MM@@@0000Cnttxuuxunnln0QOOOQOCCQOCCQMM0QMM0
0Q000@@@0@@@00QOOCtttununnnuC0M0QCQ0QOCOCCQMMQ0@@0
00@M00@@00MM0QQMQCxxxunnnnnCQ0OOOOQ0M0QCCCO0QOM@0Q
QQ0QQQQQM@M0QQO00QuxxunnnnnQOCCQMMOCQ00OCCCOQOOQOQ
OQQQOOOQMM@0OOOCCCnxtuxxunCOOQ00MM0OCOOOCCO000OOOQ
0MM0OQOCO0MQOOOQQCnttulluCnCuCQ0MMM0OCOOCCCQ0QCOOO
MMMQQMMOCQMQOOCulxCttxlluunO:':;|txunO0QCCCQQCCQ0C
MMMQ0M0O0OQnt;'. :OOuxxxxuOQ|''.. ...:|tCOOQOOCQ0Q
Q0QO0QCnul;'.....'uOQCCCnQQu:''''''.....|OOOOOCCO0
OOOOCQn'..........:|txnnxut'.''......''.'nQOOOQQOC
QQOQ0Ml........... .lxttxt;..............uQOOQQ00Q
0QOO0Q|..   .....   ;xtttl;|l|:'.........tQOQQQ0MM
0QOOOC;..    ..     .ltll|;tuuut'.'......|QOOOQ00O
0OCQ0O;..            ;lll;|xxxux'...  ...|QOQOCOOQ
0OC00Q;..            'lll;.:lxxx:..    ..;OQOQOCQM
0QOQQn;'             .|l|;  .;ll'...... . |QQOCCCO
MQOOOCxl;.            |l|;..    .'...... . 'CQQQQC
0QOOnunnul.      ...  ;l|;'.    .'.......  lOQQQQO
OOOnxuuunu:       ... ;|;;:..            .u0QOOOOO`,`@@@@M00000M@0000QO00MMQQ0M@@@MQQ000QOO0OOOQOOOQMM@
@@M00MMM00@@000Q00QQOOOO00MM000M@@MM0OOOOO0MQOOQOQ
000QM@@@M00M0QQQCttl|;;ltxnQ0@MMMMMMM0QOOO00OQ0M0O
0M@M0MMMM@@000QOu||||||l||;tQMMMMMMMM0QOOOOQQO00QQ
M0M0@@M0@@@@00QCCuuunnCCCt||QQOO0MMM0OOOOOQMM0OQQO
MMQ0@@@MM@@@000OCxxuunnCCull00QOOOQQOC0QOOQMM0QMM0
0Q000@@@M@@@00QQnttunuuuCnluMMM0QO00QOOOOOQMMQ0@@0
00@M00@@0MMM00QQnuxuCCnCCnnOM0QOQOQ0M0QOOOQ0QOM@0Q
Q00Q0QQQM@M0QQQ0CxxunCCCCCOQQOOQMMQOQ00OOOOOQQQ0Q0
OQ0QQOOQMM@0QOQOOuxxnnxunOOCOQ0MM@MOOOOOOOO00MOOQQ
0MM0OQQOQMMQOOOQQuxtxuttnQOO0MM0MMM0OOQOOOOQ0QOOOO
MMMQQMMOOQ@0OOCuCuttxxtxuCntxnCO00QOOQ0OOOO0QOCQ0O
MMMQMM0Q0OOul|:'uOuxuuuuuQn;:::;;|txnOQOOOOQOOOQ0Q
Q00O0QCut|:'''''tOQOCnCCO0n;:::'''''::xOOOOOOQOCQ0
OOOOCl;:''''''''|xunnnCCOn;:::::::::::'uQOOOOOQQOO
QQOQn:'''''::''''.;txuxxu|':''::''''::'lQOOOQQ000Q
0QOOx:''''':'''''':txuxxt;'::'''''':'''|OOOOQQ00MM
0QOOt:'''...'''''''|xxxtt;':;||;:'''''';OQOOOOQM0O
0QOQt:'..'::'''..'.:txttt:'';lxuxl;'.'';CQQQQOOOOQ
0OOQx:';txut:.'....'|tttl:'';luuuux:..':CQQQQQOC0M
0QOOl:luxxxx|.'.....'|ll|:...;xuuxt:.''';nQQQOOOOQ
MQOC|;lttxxu|........;ll|:....:ltx|'''''.'lCQOQ0QC
0QOn||llltux:....''..:ll;:'....':::''''''..uQQQQQQ
QOOx|||;;|;'.....'''.:l|;;:''......::'''.'C0QQQQQO`,`@@@@M00000M@0000QO00M0QO0M@@@MQQ000QOO0OOOQOOO0MM@
@@M00MMM00@@000Q0M@M@@@MM00M000M@@MM0OOOOO0MQOOQOQ
000QM@@@M00M00Q00OCCuunO0M0Q0@MMMMMMM0QOOO00OQ0M0O
0M@M0MMMM@@000QQn|||;;;||tuO00MMMMMMM0QOOOOQQO00QQ
M0M0@@M0@@@@000OCxllttttl|;lQQOO0MMM0OOOOOQMM0OQQO
MMQ0@@@MM@@@00QQCunnCCOOnl||0MQOOQQQOC0QOOQMM0QMM0
0Q000@@@M@@@00QCxxxuunnCnt|xMMM0QO00QOOOOOQMMQ0@@0
00@M00@@0MMM00QCxxuCuunnnllQM0QOQO0MM0QOOOQ0QOM@MQ
Q00Q0QQQM@M0QQQnxxnnnCCCnuC0QOOQMMQOQ00OOOOOQQQ0Q0
OQ0QQOOQMM@0QOQnxxunnnxunOOCOQ0M@@MQOOOOOOO00MOOQQ
0MM0OQQOQ0MQOOOQuxxuuuttO0OCQMM0MMM0OOQOOOO000OOQO
MMMQQMMOO0@0OCCCxxtxnutxCOOOOOQ0MMQOOQ0OOOO00OCQ0O
MMMQM@0QOnntl|xCxtxxunuuOxxuCOOQQOOOCOQOOOOQOOOQ0Q
Q00OQCxl;:''''tQOnuuuuCOO|::;|ltxnOOOOOQOOOOOQOCQ0
OOCl::''''''''xCOOCnnCOOn::::''':;|tnOOQOOOOOOQQOO
QOx:''''''''''':lxxxuCux;:::::::''''|nQOOOOOQQ000Q
0O|''''''''''''';xuuuuxl::'''::'''::'tQQOOOOQQ0MMM
0C;'''''''''..'''luuuux|':'''''''':''tOQOOOOOOQM0O
Qn;.'''''...:|txttxuxxt|':'''''''''''tOQOOOOQOOOO0
Ou:'.......'lxxuuxtuxttl'''''''''''':tQQQQOQQQOC0M
Ot''''.....:lttxut|ttltl'''''''''.';|nOOQQOQQOOOOQ
C|'''......'|tt|:''|llll:'''''.''.';lunnCOOQOOQ0QO
u:'''...''::::'....'||ll;''''.....';lxuxxnOOQQQQQO
|.'''..':'''.....'.';|ll;'.........;|lll|nOOQQQQOO`,`@@@@M00000M@0000QO00M0QO0@@@@MQQ0M0QOO0OOOQOOO0MM@
@@M00MMM00@@000Q0M@@@@MM000M000M@@MM0OOOOO0MQOOQOQ
000QM@@@M00M00Q0M00QQQQM@@0Q0@@MMMMMM0QOOO00OQ0M0O
0M@M0MMMM@@000QQCttt||ltunOQQMMMMMMMM0QOOOOQQO00QQ
M0M0@@M0@@@@000Qnl;;|;;|;||n0QOO0MMM0OOOOOQMM0OQQO
MMQ0@@@MM@@@000QCuuuuunut|;|0MQOOQQQOC0QOOQMM0QMM0
0Q000@@@M@@@00QOxxuunCOOnl;xMMMM0O00QOOOOOQM@Q0@@0
00@M00@@0MMM00QnxxnuxunCu||OM0QOQO0MM0QOOCQ0QOM@MQ
Q00Q0QQQM@M0QQOuuuCCnnCCutn0OOOQMMQOQ00OOOOOQQQ0Q0
OQ0QQOOQMM@0QQOxxxnnnnuuuOOCOQ0M@@MQOOOOOOO00MOOQQ
0MM0OQQOQMMQOOOnxxuuunttu0QCQMM0@@MMOOQOOOO000OOQQ
MMMQQMMOO0@0OCOuxxxuunttnOCCCOQ0MMQOOQ0OOOO00OCQ0O
MMMQMM0QOnnxttCxtttunnuunOQQQQOOQOOOCQQOOOOQOOOQ0Q
Q0QCOnt|;:''';OCxxxuuunQx:ltuOQQOQQOOCOQOOOOOQOCQ0
OCl;:''''''''tOQOCnuunOOl::'':|tuCOQQQOQOOOOOOQQOO
Qt''''''''''':;lxxunOQOt:::::'''':|C0QQOOOOOQ0000Q
n:''''''''''''.:ttttxuxt::'''::::''|QQQQOOOOQQ0MMM
u''''''''''''''.|xxxxxtl':''''''':':CQOOOOOOOOQM0Q
l'''''.''....:ltxxxxxttl':''''''''':CQQQQOOOQOOOO0
:'''....'...:txuuuuxtttl''''''''''';OQQQQOOOQQOC0M
'''''.......|ttuuuxllltl'''''''''''|QQQQQOOOQOOOOQ
''''........;lt|:'|||||l''''..''''.tQQOOOOOQQOQ0QO
'''.'.....:'::'...:|||ll''''.......:nOQQQOnnCQQQQO
'''....'.':'.....'';||l|'.''.'..'''.|COnxtltuCQQOO`,`@@@@M00000M@0000QO00M0QO0@@@@MQQ0M0QOO0OOOQOOO0MM@
@@M00MMM00@@000Q0M@@@@@M000M000M@@MM0OOOOO0MQOOQOQ
000QM@@@M00M00QQ0QOOCCO0@@0Q0@@MMMMMM0QOOO00OQ0M0O
0M@M0MMMM@@000QOx|ll|;;|tuOQQMMMMMMMM0QOOOOQQO00QQ
M0M0@@M0@@@@00OCul||l||l|;lQ0QOO0MMM0OOOOOQMM0OQQO
MMQ0@@@MM@@@0QCOnunnnCCCx|lQM0QOOQQQOO0QOOQMM0QMM0
0Q000@@@M@@@0QOCxxuuunCCulx0MMMM0O00QOOOOOQM@Q0@@0
00@M00@@0MMM0OOuxtuCuxuCulQMM0QOQQ0MM0QOOCQ0QOM@MQ
Q00Q0QQQM@M0QOCuxxuCCCCCnnQ0QOOQMMQOQ00OCOOOQQQ0Q0
OQ0QQOOQMM@0QQOuxxunnnuuuQOCOQ0M@@MQOOOOOOO00MQOQQ
0MM0OQQOQ0M0QQOuxxuuuuttu0OCQMM0@@@MOOQOOOO000OOQQ
MMMQQMMOO0MQCnCxxttuuuttnQOOCOQ0MMQOOQ0OOOO00OCQ0O
MMMQMM0Cnxtl;lOxtttunnuuxuCOQQOOQOOOCQQOOOOQOOOQ0Q
Q0Ouul;::'''';OQnuxuuuCQt';|tnCOOQQOOCOQOOOOOQOCQ0
Ox::'''''''''|COOCnnCOQC|::''':|tnOQQQOQOOOOOOQQOO
n:''''''''''''';xxxuCQCt:::::::'''|Q0QQOOOOOQ0000Q
|'''''''''''''''tuuuuuxl::''''::::'u0QQQOOOOQQ0MMM
:''''''''.....'';uxuuuxl''''''':':'x0QOOOOOOOOQM0Q
:'.''..'.';|ltl;:txxxxtl':'''''''''x0QQQOOOOQOOQQ0
:'''...';txxxut;:|xttttl'''''''''''x0QQQQOOOQQOO0M
'''''.':;ltxtxt;::tlllll'''''''''''u0QQQOQOQQOOOOQ
''''..'::|ttt|:'''|ll|l|''''.''''''xQQQQQOOOOOQ0QO
'''.....':||:...'':llll|.''..''.'::lOOCCCOOOOQQQQO
'''....':'''....'''|lll|..'.'..'':;|xxxuuCOOOOQQOO`,`@@@@M00000M@000MQO00MMQOQ@@@@MQQ0M0QOO0OOOQOOO0MM@
@@M00MMM00@@00QQOOOQOQ00M00M000M@@MM0OOOOO0MQOOQOQ
000QM@@@M00M0QOxl||||||xCMQQ0@@MMMMMM0QOOO00OQ0M0O
0M@M0MMMM@@0Onul|||;|||l|n0QQMMMMMMMM0QOOOOQQO00QQ
M0M0@@M0@@@@QxtxuunnnCCnluMM0QOO0MMM0OOOOOQMM0OQQO
MMQ0@@@MM@@@QttuxuuCCCCCxC@MMMQQOQQQOO0QOOQMMMQMM0
0Q000@@@M@@@Onxxxxxunnnnn0MMMMMM0O00QOOOOOQM@Q0@@0
00@M00@@0MMMOnnxuuxunCCCC0MMM0QOQQ0MM0QOOCQ0QOM@MQ
Q00Q0QQQM@M0QOCuxxxunCCCOOQ0QOOQMMQO000OCOOOQQQ0Q0
OQ0QQOOQMM@0QQOxxxxunnuuCQOCOQ0M@@MQOOOOOOO00MQOQQ
0MM0OQQOQM@0OCntxttxnuttCMQO0MM0@@@MOOQOOCO000OOQQ
MMMQQ@MOCCnt;;CutttxnutxuxunCOQ0MMQOOQ0OOOO00OCQ0O
0MMOQOut|:''''xQnxuuuuun|':;|lxnOOOOCQQOOOOQOOOQ0Q
QOxl;:''''''''tQQOCnnOOC;:::''':;lnOOCOQOOOOOQOCQ0
O|'''''''''''';lununCOOu:::::::::';O0QOQOOOOOOQQOO
u:'''''''''''''.|uuuuux|:::::::::::C0QQOOOOOQ0000Q
l''''''''''''''''xuuuxx;':''''::'''n0QQQOOOOQQ0MMM
;''''..''''''''''|uuxtt;'''''''''''u0QOOOOOOOOQM0Q
:'.'''.''.''''''':xxttt;':'''''''''x0QQQOOOOQOOQQ0
:'''...''..'''''''ltllt;';|||;:.'''lQQQQQOOOQQOO0M
''''.'|tl:..'''''';llll;';|ltxx|:''|QQQQQOOOQOOOOQ
'...;uuxxl'..''''':|lll;':|ltxxxtl;;OQOOOOOOOOQ0QO
':';txxuxx:....''''|lll;..';lxxtttl:uQOQOOOOOQQQQO
':';||txut'....''''|lll;'...';lttl|xOQQQQOOOOOOOOO`,`@@@@M00000M@0QQQnCCCCOOO0M@@@MQQ0M0QOO0OOOQOOO0MM@
@@M00MMM00@@0Ont|||||||x000M000M@@@M0OOOOO0MQOOQOQ
000QM@@@M00Cxt|;;;||;|lt0MQQ0@@M@MMMM0QOOO00OQ0M0O
0M@M0MMM0@Mu;;|txxnCCCOnO0QQQMMMMMMMM0QOOOOQQO00QQ
M0M0@@M0@@@O|;|xuunnCCCnO0MM0QOO0MMM0OOOOOQMM0OQQO
MMQ0@@@MM@@Ot|tuxxuuxnnnQMMMMMQQOQQQOO0QOOQMMMQMM0
0Q000@@@M@@MnxxxxunnxuCC0MMMMMMM0O00QOOOOOQM@Q0@@0
00@M00@@0MMMOnxxxxuuunnCQ0MMMMQOQQ0MM0QOCCQ0QOM@MQ
QQ0QQQQQMMM0QQuxxxxuunCOOOQ0QOOQMMQO000OCOOOQQQ0Q0
OQ0QOOOOMM@0CCutxttxuuxunQOOQ0MM@@MQOOOOOOO00MQOQQ
0MM0OQQOQQCx;|nxtttxnuttulltuCQ0@@MMOOQOOCO000OOQQ
MMM0Q0Cxl;:'''xOuxuuutttx:':::;|xQQOCQ0OOOO00OCQ0O
0MOut|:'''::'';OQOOnuOnu|:::::::';OOCQQOOOOQOOOQ0Q
Qx:''''::'::'''xCOnnCnCC;::::::::'uQOCOQOOOOOQOCQ0
n:'''''':'::''''|uuuuxun:::::::::'u0QQOQOOOOOOQQOO
t''''''''''''''''tuuutt|::::::::''t0QQQOOOOOQ0000Q
;''''..'''''''''';uutlt|''''':'''';QQQQQOOOOQQ0MMM
:''''...'.''''''''ttllltlll|:''''';OQQOOOOOOOO0M0Q
''.'.......''''''';l|||ttuuux''''''CQOQQOOOOQOOQQ0
''''.........''''''||;|ltuuuu:'''''tQQQQQOOOQQOO0M
'''''.........'''''||:||:|tut:''''''nQQQOOOOQOOOOQ
'....'''.......''''||:|;..:|;:'''.;nOQOQOOOOOOQ0QO
'''';lxxt;......'''||;|;..''.''':|CQQQQQOOOOOQQQQO
''':tuunnu;......'';|;|;''..:lxnCOQQQQQQQOOOOOOOOO`,`@@@@0000QQM@Oul|:'::'':|OM@@@MQQ000QCC0OCOQOOOQMM@
@M00QMMM00Mx|;:::;;|l||u0Q0M000M@@MM0OOOCO0MQCOOOQ
00QQM@@@MQn::::;lxunCOCCMMQO0@@MMMMM00OCCC00OQ000O
QM@000M00MC;:::|txuunnCnO0QQQMM0MMMMM0OCCCOQQOQ0QQ
M000MMM0@@C;l|;lxxxunuuuO0MM0QOO0MMM0OOOCCQMM0OOOO
MMQQ@@@MM@MCxxttxxxnCuxuQMMMM0QOOOQOCCQQCCQMM0QMM0
0Q00Q@@@0@@Mnxttttxunuun0MMMMMMMQC00QOCOCCQMMQ0@@0
0Q@M0QMM0000QuttttttxunCO0MMM0OOOOQMM0QOCCO0QOM@0Q
OQ0OOOOOMMQnnxttttttxnnCCOQ0QOOQMMQOQ00OCCCOQQOQOQ
OOQQOCCCCul';nttttxuuCttxl;ltuQM@@MOCOCOCCO00MOOOQ
0M0Qnxl;'....tOutuuxuCllxl...':t0@M0OCOOCCO00QCOOO
Ont;'....''..:CQOCnuCOtlt|'''''.xMOOCO0OCCC0QCCQ0C
|.........''..|CCnunnxlxl''''''.|COOCOOOCCCQOCCQ0Q
...........'.. ;xuuuxllOt.'''''.|OQOCCOQCCCOCQCCQ0
...      .'.....luuxtl|nl.'''''.|OOQQQOOOCCCCOQQOC
          ......:xxtl|:|'.......:nQQQQOOOCCOOQ000Q
           ......txll;'|':;;::'.'uQQQQQOOCCOQQ0MMM
            .....;l||'.|:;ltxxut||OQQOOOOCCCCOQM0O
             .....;|: .|':|lxxuul|lOOOOOOCCOOOOOO0
              ....:;' .;  .';ltl|;tCOQQOOOOOQQOC0M
            '::::'::. .;    .....;OOOOOOOOOOQOCOOQ
          :|l|;;;::'. ';   .  .:lCOOOOOOOOOOOCQ0QC
         ;|ltl|;;.'...';   :nnCOOOOOOQOOOOOOOOQQQO
.        :;|lt|' .   .:|  ..n0OOOOOOOOOOOOOOOOOOOO`,`@@@@0000QQMOxl;;;;;;;;;|nM@@@MQQ0M0QOO0OOOQOOO0MM@
@@M00MMM00O|;;;;|txunCnC000M000M@@@M0OOOOO0MQOOQOQ
000QM@@@MQu;;;;|tunnCCOC0MQQ0@@M@MMMM0QOOO00OQ0M0O
0M@M0MMM0Mt;||;|tuuunnnnO0QQQMMMMMMMM0QOOOOQQO00QQ
M000M@M0@@C|unxtxxunCOnnO0MM0QOO0MMMMOOOOOQMM0OQQO
MMQQ@@@MM@@Ctuuxxxxunnnn0MMMMMQQOQQQOO0QOOQMMMQMM0
0Q0QQ@@@0@@MnxxxxxxxnnnO0MMMMMMM0O00QOOOOOQM@Q0@@0
QQ@MQQMM00CCuxxxxxtxuCOOOMMMM0QOQQ0MM0QOCCQ0QOM@MQ
OQ0QQOOnul'tnxxuuxunOuuCCOQ0QOOQMMQO000OCOOOQQQ0Q0
OOOnxl;:''':nOuxuuuuQntxxt;|tuQM@@MQOOOOOOO00MQOQQ
ut;:'''::::'tQQCCnuO0Cttxt':::|QMM@MOOQOOCO000OOQQ
'''''::::::':xOOnnCCnlltxl::::'xM0QOCQ0OOOO00OCQ0O
''''''''::::''lnuuux|:;ut:::::'lQOOOCOQOOOOQOOOQMQ
'''''''''::::':xuuux|:|Ou:::::'lQOQOOCOQOOOOOQOCQM
'''......'::'''|uxxx|:;nt:::::'lQOOQQQOOOOOOOOQQOO
..........''''''lxtt;::l::::'''lQQQQQ0QOOOOOQ000MQ
...........''''':tll:':l::''''':CQQQQQQQOOOOQQ0MMM
'...........'''''|l|:':l:'''''''tQQQQQOOOOOOOO0M0Q
'............';|ltttt|:l:'''..''|nnCCCOOOOOOQOOQQ0
.............|tttxxxt::l'''....':;ltxunnCOOOQQOO0M
............'ltttxxx;.:|... ....':|lxuunnCOOQOOOOQ
............';||lll:.':|.;:;'.. ..:lxunnOOOOOOQ0QO
;:'......':'.'':::' .':|.:.lOnuxxxxuunCOQOOOOQQQQO
Ot;......''......''''':l...'O0QQQQQQQQQQQOOOOOOOOO`,`@@@@0000QQMCxl;;;:;;;;:;nM@@@MQQ0M0QOO0OOOQOOO0MM@
@@M00MMM00C|;;;;|txunnun0Q0M000M@@@M0OOOOO0MQOOQOQ
000QM@@@MQt;:;;|lunnCOOCMMQQ0@@M@MMMM0QOOO00OQ0M0O
0M@M00M00Q|;||;|tuuunnnnQ0QQQMMMMMMMM0QOOOOQQO0MQQ
M000MMM0@@x|nnxtxuunCOnnO0MM0QOO0MMMMOOOOOQMM0OQQO
MMQQ@@@MM@MxtuuxxxxuCCnC0MMMMMQQOQQQOO0QOOQMMMQMM0
0Q0QQ@@@0@@0xxxxxxxunnnQ0MMMMMMM0O00QOOOOOQM@Q0@@0
QQM0QQM@0CnnxxxxxxtxnCCOO0MMMMQOQQ0MM0QOCCQ0QOM@MQ
OQ0QQCnxl';CuxxuuunCOCOOOQ00QOOQMMQO000OCOOOQQQ0Q0
Onxt|:'''''tQnxunnxCOlxxuxxnOQ0M@@MQOOOOOOO00MQOQQ
;:''''::::';O0OCnunQQxttx|':|tO0MMMMOOQOOCO000OOQQ
''''':::::''lunnnnCOl|ttx|:::'|Q00QOCQ0OOOO00OCQ0O
''''''::::::.:xuuuuu::|ul::::::CQOOOCOQOOOOQOOOQMQ
'''''.':'::::'|uuunx:'tQt'::::'uQOQOOCOQOOOOOQOCQM
''.....'''::'''txxut:'lCl'::::'tQOOQQQOOOOOOOOQQOO
.........'''''':xxul'::l:::''''|QQQQQQQOOOOOQ000MQ
'...........''''|ttt:::l::''''';OQQQQQQQOOOOQQ0MMM
'.............:;luxxul:l:'''''''xOOQQQOOOOOOOO0M0Q
'............:lttuuux:;l'''''''.l0OOOOQQOOOOQOOQQ0
..''..'......:tttuxx|';l'''''...;CQQQQQQQOOOQQOO0M
.............';;;:::'';|''''...'.';lxnOCnnOOQOOOOQ
..........:''......''';;''''. ....  .:lttxxuunCOQO
xl:.............''...';;.:|'::'.     '|lttttxuCCCO
QC|'...............''';|''. lQCnxt|;:::;|tuunnnCCC`,`M@@@0000QQMQnt|;::::;::;n@@@@MQQ0M0QOO0OOOQOOO0MM@
@@M00MMM00Ol;:;;|lttxxtu0Q0M000M@@@M0OOOOO0MQOOQOQ
000QM@@@MQx:;;;|tunCOOOOMMQQ0@@M@MMMM0QOOO00OQ0M0O
0M@M00M000l;:;;|xuuunnnnQ0QQQMMMMMMMM0QOOOOQQO0MQQ
M000MMM0@@tluxltxunnCCunO0MM0QOO0MMMMOOOOOQMM0OQQO
MMQQ@@@MM@0xunuxxxunCCnn0MMMMMQQOQQQOC0QOOQMMMQMM0
0Q0QQ@@@0@@QxxxxxxxunnnO0MMMMMMM0O00QOOOOOQM@Q0@@0
QQ@0QQMM00QOuxxxxxtxnCCOO0MMMMQOQQ0MM0QOCCQ0QOM@MQ
OQ0QQOOCnl|nxxxuuuuuOOOOOQQ0OOOQMMQO000OCOOOQQQ0Q0
OOCnxl;:'''xOuxuunnnOtxxunnCQ00M@@MQOOOOOOO00MQOQQ
t|:'''':::'|QQnnnuxC0ultx;:|tnQ0MMMMOOQOOCO000OOQQ
'''':::::'':nOOCnnO0nlltx;::'';O00QOCQ0OOOO00OCQ0O
'''''':::::''|uuuuuu:'lu|:::::'xQOOOCOQOOOOQOOOQMQ
'''''.':':::''tuuuut:'xO|:::::'lOOQOOCOQOOOOOQOCQM
''.....'''::'';xxuut:'tn;::::'';OOOQQQOOOOOCOOQQOO
........'''''''lxtul::;l'::'''':OQQQQQQOOOOOQ00MMQ
'........'''''''tlt|'';l':''''''nQQQQQQQOOOOQQ0MMM
''............'';tll;:;l''''''''tQOQQQOOOOOOOO0M0Q
.............';|txxxx;;|'''''''':OOOOOQQOOOOQOOQQ0
......'......|ttxuxut';|'''''.'''O0QOOQQOOOOQQOO0M
............'|llxxxx:';|''''...''tCOQQQQQOOOQOOOOQ
..........'.';;||||;.';;''''..... .'|xuuxnCCOOQ0QO
::'......':'....''.'..;;''''   .....';llttttuCOQQQ
OOl................''';;''..ll:.   .'|lttttxuCCCOO`,`M@@@0000QQM0Out|;:;;;||u0M@@@MQQ0M0QOO0OOOQOOO0MM@
@@M00MMM00Ol||;;;|||||lO0Q0M000M@@@M0OOOOO0MQOOQOQ
00QQM@@@MQx;;;|txunCOCCQ@MQQ0@@M@MMMM0QOOO00OQ0M0O
0M@M00M00Mx:;;lxuunnCCCOM0QQQMMMMMMMM0QOOOOQQO0MQQ
M000MMM0@@tll|txuuununnCQ0MM0QOO0MMMMOOOOOQMM0OQQO
M0QQ@@@MM@0nuxxxxunCnunO0MMMMMQQOQQQOO0QOOQMMMQMMM
0Q0QQ@@@0M@QuxxxxxununnQ0MMMMMMM0O00QOOOOOQM@Q0@@0
QQ@MQQMMQ0M0nxxxxtxunnOOO0MMMMQOQQ0MM0QOCCQ0QOM@MQ
OQQOOOOQ0QxnuxxxxxxuCOQOOOQ0OOOQMMQO0M0OCOOOQQQ0Q0
OOQQOCuxl:'tCxxuuunnOutxuCCOQ00M@@MQOOOOOOO00MQOQQ
QOut|:''''':COuunuxuQCltxl;|xnQ0MMMMOOQOOOO000OOQQ
;:'''':::'''n0QCCunQ0ultx|':'':nM0QOCQ0OOOO00OCQ0O
'''''':::::';tnnuunCx'|ul:::::'|OOOOCOQOOOOQOOOQMQ
'''''.':':::'.luuuxx;'lOl'::::::CQQOOCOQOOOOOQOCQM
''.....'''::'':xxuux;'|C|':::'':CQOQQQOOOOOCOOQQOO
........'''''''|xtxt;':l:::'''':CQQQQQQOOOOOQ00MMQ
.........'''''''tttt:':l:'''''''uQQQQQQQOOOOQQ0MMM
'.........'''''':t||:':l:'''''''lOOQQQOOOOOOOO0M0Q
...........'''''';||:':l:''''''':QOOOOQQOOOOQOOQQ0
............''':::|;:':l'''''.':;C0QOQQQOOOOQQOO0M
............':;|||||:':|''''..'|tuCCOOQQOOOOQOOOOQ
...'.......:|ltttxt|'':|''....'|ltxuCOOOOOOOOOQ00O
..........'lttttxu|''.:|.... ..'|txuCOOOOOCOOQQQQQ
;:'.......'|ltttx|....:|...:;.   .'lCOOOOOOOOOOOOO`,`M@@@0000QQM@QCnnuxxunOQOQM@@@MQQ0M0QOO0OOOQOOO0MM@
@@M00MMM00MQul|;;;;;;lC00Q0M000M@@@M0OOOOO0MQOOQOQ
00QQM@@@MOxll|||llltxxt0@MQQ0@@M@MMMM0QOOO00OQ0M0O
0M@M00M00Mu;|xuunCCOOCxOM0QQQMMMMMMMMMQOOOOQQO0MQQ
M000MMM0@@n;txxxuunnnnnOO0MM0QOO0MMMMOOOOOQMM0OQQO
M0QQ@@@MM@OttxxuuuuunnCQ0MMMMMQQOQQQOO0QOOQMMMQMMM
0Q0QQ@@@0@0nxxxuuuuuCCO00MMMMMMM0O00QOOOOOQM@Q0@@0
QQ@MQQMMQ000nxxxxxunnCOOQMMMMMQOQQ0MM0QOCCQ0QOM@MQ
OQQQQOOO000QCxxxxxunC0QCCOQ0OOOQMMQO0M0OCOOOQQQ0Q0
OOQQOCCO00QunxxxxxunnOxxxCOOQ00M@@MQOOOOOOO00MQOQQ
0M00OOCnxt;'unxxxxuuuOxtxultuCQ0@MMMOOQOOCO000OOQQ
00Qnxt|:''''lQCunuxxC0ulxt':':;|n0QOCQ0OOOO00OCQ0O
ut|:''''::'';O0QCnuOQOlxu::::::::uOOCOQOOOOQOOOQMQ
:''''':::::''|xnnuunnl:Cn:::::::'xQOOCOQOOOOOQOCQM
'''...':''::'''tuuuux::ux'::::::'tOQQQOOOOOCOOQQOO
'......'''''''';xxxxl:'|;'::''':'tQQQQQOOOOOQ00MMQ
........''''''''lxxt|:'l;''''''''|OQQQQQOOOOQQ0MMM
'........''''''':ttl;':l|;;;:'''':nQQQOOOOOOOO0M0Q
'.........''''''';l|;:;ltxuuut;''|OOOOQQOOOOQOOQQ0
...........'''''''|;:':llxxuuuu|'|CQOQQQOOOOQQOO0M
............'''...:;:..|:;lxxxx|:.|OOOQQOOOOQOOOOQ
.............''...';:'.|' .':;;:'lOQQOOOOOOOOOQ00O
...................;;''|'......:;CQQQQQOOOCOOQQQQQ
'......':;;:'...''.::''l'.'':;xCOQOOQQOOOOOOOOOOOO`,`M@@@0000QQM@0QQMQQ00MMQOQM@@@MQQ0M0QOO0OOOQOOO0MM@
@@M00MMM00@MOnnxtxuCO0M00Q0M000M@@@M0OOOOO0MQOOQOQ
00QQM@@@MQQnl||;;;;||lnM@MQQ0@@M@MMMM0QOOO00OQ0M0O
0M@M00M00MOtlllltxxux|l0M0QQQMMMMMMMMMQOOOOQQO0MQQ
M000MMM0@@uluuunCCCOOxlCQ0MM0QOO0MMMMOOOOOQMM0OQQO
MMQQ@@@MM@OtxxxxunuunuxQ0MMMMMQQOQQQOO0QOOQMMMQMMM
0Q0QQ@@@0@QnxxxxunnnCnnQ00MMMMMM0O00QOOOOOQM@Q0@@0
QQ@MQQMMQ0OCuxxxunCCCCOOQMMMMMQOQQ0MM0QOCCQ0QOM@MQ
OQ0QQOOO0MMQCxxxxnnnnQQOOOQ0QOOQMMQO0MMOCOOOQQQ0Q0
OOQQOOCO00M0OuxxxunnnOxxxOOCOQ0M@@MQOOOOOOO00MQOQQ
0M00OQOCQ0MCnutxtxunnnttxCnnO000@@MMOOQOOCO000OOQQ
000QQM0Onut:|Cxxxxununxtxl'::;|tuOQOCQ0OOOO00OCQ0O
0M0OOCx|:''''nOnuuxxuQQnt:::::''':tOCOQOOOOQOOOQMQ
OOul;:'''''''xQQOnxnOQCOx:::::::::;COCOQOOOOOQOCQM
C|''.'':''''':lxuuxuut|nl':::::::::u0QOOOOOCOOQQOO
u:''...':'''''.:xxuuxl:l::::''':'''tQ0QOOOOOQ00MMQ
t'......''''''''|uxxtl:l:''''''''''|OQQQOOOOQQ0M@M
|'.......''''''''txtt|:l||;;:'''''':uQOOOOOOOO0M0Q
|'........''''''';tll|lttxuuut:.':::uOQQOOOOQOOQQ0
;'.........'''''..|ll||ttxuuuul'''';uQQQOOOOQQOO0M
;''.........''....:||::|;;lxut|''''''tCQOOOOQOOOOQ
;''..........''....;;::|. .:;|:':'':|uOQOOOOOOQ00O
:.............''...:;;;|'..'.':''':xCQQOOOCOOQQQQQ
|;||;:.........'''.';;;|'...'':|tunOQQOOOOOOOOOOOO`,`M@@@0000QQM@0QQ0QQ00M0QOQM@@@MQQ0M0QOO0OOOQOOO0MM@
@@M00MMM00@@0QQQQ0MM@@M00Q0M000M@@@M0OOOOO0MQOOQOQ
00QQM@@@MQ00nuutlllxuCQM@MQQ0@@M@MMMM0QOOO00OQ0M0O
0M@M00MM0@MCl;;;;;|||||CM0QQQMMMMMMMMMQOOOOQQO0MQQ
M000MMM0@@0CxtxxunnCnl|xQ0MM0QOO0MMMMOOOOOQMM0OQQO
MMQQ@@@MM@0xuuunnnCOCu|u0MMMMMQQOQQQOO0QOOQMMMQMMM
0Q0QQ@@@0@@CuttxnuxunntCM0MMMMMM0O000OOOOOQM@Q0@@0
QQ@MQQMM000OnxxxnCnCCCnCQMMMMMQOQQ0MMMQOCCQ0QOM@MQ
OQ0QQOOO0M0OCxxxunnCCnCOOOQ0QOOQMMQO0MMOCOOOQQQ0Q0
OOQQOOCOM0M0OnxxunnnnuxxnQCCOQ0M@@MQOOOOOOO00MQOQQ
0M00OQOCO0MQQCxxxuunnultn0QO0MM0MMMMOOQOOCO000OOQQ
0M0QOM0OO0MOuCttttunnultulltxnCO0MQOCQ0OOOO00OCQ0O
0M0O0M0OCxt;:nCxxxxuuuCu|'''':::;ltnOOQOOOOQOOOQMQ
O0QOQnt|:'''.lQOnnuxuOQC;::::::::'':nOOQOOOOOQOCQM
OCul;'''''''.;COOCuuOQOn;::::::::::'lQOOOOOCOOQQOO
Qn:..''::''''':|xxxxxxx|:::'''':'''':CQOOOOOQ00MMQ
Qu''.'.':'''''''lxuuuxt|':'''''''''''x0QOOOOQQ0M@M
Qx'.....'''''''':txxxtt|':'''''''''''|OOOOOOOO0M0Q
Qt'......''''''''|xxttl|':::::'''.':::uQOOOOQOOQQ0
Qx'..'....''''''''lttll|':::;;||;:''':u0QOOOQQOO0M
Qt'::;:'...''''.'';llll|':::;|txuxt|'';xOOOOQOOOOQ
Qxlll|;:'...'''.'''|lll;.'':;ltxxuuxl:';nQOOOOQ00O
Quxuuut|:....'''''.;lll|'....';ltxxtl|lCQOCOOQQQQQ
Cuununnl'......'''.'llll:'......';|||lnQOOOOOOOOOO`,`M@@M0000QQM@0QQ0QOQ000OOQM@@@MQQ0M0QCC0OCOQOOOQMM@
@M0QQMM000@@0QQQ0M@@@@M00Q0M000M@@@M0OOOCO0MQCOOOQ
00QQM@@@MQ0MQQOOOCnCO0M@@MQO0@@M@MMMM0OCCC00OQ000O
QM@000M00M@0Oull|;::;|tu00QQQMMMMMMMM0OCCCOQQOQ0QQ
0000MMM0@@@MCx;;;||ll|;:x0MM0QOO0MMM0OOOCCQMM0OOOO
M0QQ@@@MM@@MnuxuuuCCOCx;t0MMM0QOOOQOCCQQCCQMM0QMM0
0Q0QQ@@@0@@Mnnxtuuuunnn|x0MMMMMMQO00QOCOCCQM@Q0@@0
QQ@MQQMMQ0M0Ontttuuxunntn0MMM0OOOOQMM0QOCCO0QOM@0Q
OQQQQOOO0MMQOnxxxunnnnnnCOQ0OCCQMMQO000OCCCOQQOQO0
COQQOCCOM0M0OCxttxuunuttuOCCOQ0M@@MOCOCOCCO00MOOOQ
0M00OQOCO0MQOOnxtxuuuxllx0OCQ000MMMMOCOOCCO00QCOOO
000QOM0OCQMQOOCttltxnullxCCOOOQQMMOCCO0OCCC00CCQ0C
0M0O0MQOQOQCxxCttttxnnxul';|txunOCOOCOOCCCCQOCCQ0Q
O0QO0QCnx|:'.:OntttxxxnOt......'':|tnCCQCCCOCQCCQM
CCCnxl;'.    'nQOnutxCOC|''''.......'uOOOCCCCOQQOC
OOn:.  .......lxnuxxnOCl'..........'.;QOCCCOQQ00MQ
QOt.   .'....  .|xxxxxul..............uQOCCOQQ0MMM
QO|     ....  . :xxxuxt|........... ..|OOCCCCOQM0O
QC:     .''::'...tuxttt|.'......... ..'COOCOQCOOO0
OC;  .:|ll|||:.  ;uxttl|.'.............uQOCOQQOC0M
QC; '|ltxxll|:. ..ltlll|..........  ...;OQCOQCCOOQ
0C;.'||txxl|;.  . :llll|..........   .. 'uOOOCQ0QC
Qu'':||lxx|'    ...;|ll|:........     .:.|OOOOQQQO
Ol:;l;:;|;.    ....:||||;' ... .     ':||tCOOOOOOO`,`@@@@0000QQM@0QQ0QO00M0QOQM@@@MQQ0M0QOO0OOOQOOO0MM@
@@M00MMM00@@0QQQ0MMM@@M0000M00MM@@@M0OOOOO0MQOOQOQ
000QM@@@M00M0QQ0MMM00MM@@MQQ0@@M@MMMM0QOOO00OQ0M0O
0M@M00MM0@@000QCnuxlllxnOQ0QQMMMMMMMMMQOOOOQQO0M0Q
M000MMM0@@@@0QCt;;;;;;|||tQ@0QOQ0MMMMOOOOOQMM0OQQO
MMQQ@@@MM@@@0OCxtxxunnnul|C@MMQQOQQQOO0QOOQMMMQMMM
0Q0QQ@@@0@@M0OxnunnnCCOCulnMMMMM0O000OOOOOQM@Q0@@0
0Q@M0QMM00M00QCnttxnuxunntOMMMQOQQ0MMMQOCCQ0QOM@MQ
OQ0QQOQQMMMQQQOnxxxnCnnCCnC0QOOQMMQO0MMOCOOOQQQ0Q0
OOQQOOOOMM@0QQCCxxxunnxxuCOCOQ0M@@MQOOOOOOO00MQOQQ
0MM0OQQCQ0MQOOOQuxxxnnttxQOCQ000MMMMOOQOOCO000OOQQ
0MMQOM0OOQMQOOOQnxxxuuttxCOOOOQQMMQOCQ0OOOO00OCQ0O
0MMO0M0O0OM0OOCOutttxnnunnlnOOOQ0OOOCOQOOOOQOOOQMQ
Q0QO0QQQQOnxl||CnttxxnnOCC:':;|txnOOQOOQOOOOOQOCQM
OOOOOCnx|;'''';CQCxxxxnCOC:::''''':;luOQOOOCCOQQOO
QOOOu:'''''''';nCOCuuCQuCl':'':::'''''lOOOOOQ000MQ
QOCO|''''''''''':lttxunxl''''''''''''::CQOOOQQ0MMM
0OOu:''.''''''..'lxttxxt|:'''''''''''''tQOOOOO0M0Q
QOOl''..'''..':::|xttxxt;::'''''''''''':CQOOQOOQQ0
QOO|.'....';ltxxtlxxtttt|'''''''''''''''tQOOQQOO0M
QOCl'''..';xxxxxxltxtttt|:'''''''''''''';OQOQOOOOQ
0Qn|'..'.'ltxxxut:;ttllt|:'''''''''''''''lQOOOQ00O
QOt::'::''|tt;::'''|ltlt|;''''''''''..''''tQQQQQQQ
Ou:::::;::::' ..''';|llll|:'''''''''....'''CQOOOOO`,`M@@M0000QQM@0QQ0QOQ000OOQM@@@MQQ0M0QCC0OCOQOOOQMM@
@M0QQMM000@@0QQQ00MM@@@M0Q0M000M@@@M0OOOCO0MQCOOOQ
00QQM@@@MQ0MQQQQMM0QQOCO00QQ0@@M@MMMM0OCCC00OQ000O
QM@000M00@@00QQ0Qntl|;;:;lxCQMMMMMMMM0OCCCOQQOQ0QQ
0000MMM0@@@@000Qnl;;;;|lll||OQOO0MMM0OOOCCQMM0OQOO
M0QQ@@@MM@@@0Q0OxxxuunnCCCx;nMQOOOQOCCQQCCQMM0QMM0
0Q0QQ@@@0@@MQQQntxxxuunnnnulnMMMQO00QOCOCCQM@Q0@@0
QQ@MQQMM00M0QQQ0CxtttxnuunnxQ0OOOOQMM0QOCCQ0QOM@0Q
OQ0QQOOOMMMQQQQQCnxxtxnCCnnnCCCQMMQO000OCCCOQQOQO0
OOQQOCCOMMM0OQQOCCuttuxxunnCOQ0M@@MOCOCOCCO00MOOOQ
0MM0OQOCO0MQOOOQQCntlutlxnCCQ000MMMMOCOOCCO00QCOOO
0M0QOM0OOQMQOOOQQOntlxtlxnCCnOQ0MMOCCO0OCCC00CCQ0C
0MMO0M0OQO0QOOCnuCutttuxunnCl|tuCCOOCOOCCCCQOCCQMQ
O0QO0OOO0QCnt|:':nCxttuOuxCOl...':|txnCQOCCOCQCCQM
CCCCCQ0Ct|:.... :CQOCuuCnOQu:''......':lnCCCCOQQOC
QOCO0MC: . .... :xxunuuxOOu:.......'.'..;COOQQ000Q
0QCO0Qx'...... .. .|ttttuxl'............'nOOQQ0MMM
0QCOCCl.....    ...|xxtttl|'.............tOOCOQM0O
QOCQ0u|.   ..... ..;txtlll|'.............;OOQCOOO0
QOCQ0n|. .|||l|'   :txtlll|:..............uOQQOC0M
QOCQQul. lxtttl|'  .|tllll|:..... ........|OQOCOOQ
0QCOOx|:;tttxxt;....:|lll||:....  . . ....'COOQ0QC
QOOOul;||lttt|:. ...';||ll|;'...   .   ....lOQQQQO
OCOOx|;;:;ll:    ...';||||||:....  .     .. tQOOOO`];u.disabled=!0;const t=document.createElement("pre");t.style.margin="0",t.style.font="inherit",t.style.color="#00ff00",k.appendChild(t);const s=new Audio("/rickroll.mp3");s.play().catch(()=>{});let x=0;const Q=C.length*2,a=setInterval(()=>{x<Q?(t.innerHTML=C[x%C.length],document.getElementById("input-line").scrollIntoView({block:"end"}),x++):(clearInterval(a),s.pause(),t.innerHTML="",O('<span class="err">You just got rickrolled.</span>'),u.disabled=!1,u.focus({preventScroll:!0}))},150)}u.addEventListener("keydown",C=>{if(C.key==="Enter"){const t=u.value;t.trim()&&(h.push(t),f=h.length),j(t),u.value=""}else C.key==="ArrowUp"?(C.preventDefault(),f>0&&(f--,u.value=h[f])):C.key==="ArrowDown"?(C.preventDefault(),f<h.length-1?(f++,u.value=h[f]):(f=h.length,u.value="")):C.key==="Tab"&&(C.preventDefault(),R())});function R(){const C=u.value,t=C.split(/\s+/),s=t.length<=1,x=t[t.length-1]||"",Q=t.length>1?t.slice(0,-1).join(" ")+" ":"";let a=[];if(s)a=["help","ls","cat","cd","pwd","whoami","clear","neofetch","echo","date","uptime","uname","ping","fortune","cowsay","sudo","exit","logout","matrix","hack","coffee","rm","make"].filter(r=>r.startsWith(x.toLowerCase()));else{const p=t[0].toLowerCase(),r=b[i]||[];p==="cd"?(a=r.filter(c=>c.endsWith("/")).map(c=>c.replace("/","")).filter(c=>c.startsWith(x)),"..".startsWith(x)&&a.push(".."),"~".startsWith(x)&&a.push("~")):p==="cat"||p==="less"||p==="more"?a=r.filter(c=>!c.endsWith("/")).filter(c=>c.startsWith(x)):a=r.filter(c=>c.startsWith(x))}if(a.length!==0)if(a.length===1)u.value=Q+a[0],s&&(u.value+=" ");else{const p=H(a);p.length>x.length?u.value=Q+p:(O(`${g()}<span class="cmd">${C}</span>`),O(a.map(r=>b[i]?.includes(r+"/")?`<span class="dir">${r}/</span>`:r).join("  ")))}}function H(C){if(C.length===0)return"";if(C.length===1)return C[0];let t=C[0];for(let s=1;s<C.length;s++)for(;C[s].indexOf(t)!==0;)if(t=t.substring(0,t.length-1),t==="")return"";return t}document.addEventListener("click",C=>{const t=C.target.closest("[data-cmd]");t&&(C.stopPropagation(),j(t.dataset.cmd),u.value=""),u.focus({preventScroll:!0})});function B(){document.getElementById("input-line").style.visibility="hidden",u.disabled=!0;const C=fetch("https://ipapi.co/json/").then(s=>s.json()).then(s=>`${s.ip} (${s.city}, ${s.region_code})`).catch(()=>"127.0.0.1 (localhost)"),t=document.createElement("span");t.textContent="█",t.style.animation="blink-cursor 1s step-end infinite",k.appendChild(t),setTimeout(async()=>{const s=await C;t.remove();const x=`<span class="dim">${M.hostname} server</span>
<span class="dim">kernel ${M.kernel} on x86_64</span>
<span class="dim">Last login from ${s}</span>
<span class="dim">This session may be monitored</span>

<span class="cyan">Welcome to ${M.hostname}!</span>

Type <span class="exec clickable" data-cmd="help">help</span> for available commands.
Try <span class="exec clickable" data-cmd="ls">ls</span> and <span class="exec clickable" data-cmd="cat about.txt">cat</span> to explore.
`;O(x),E.innerHTML=g(),document.getElementById("input-line").style.visibility="visible",u.disabled=!1,u.focus({preventScroll:!0})},2e3)}B();

I am subscribed to several Telegram channels that share posts about opportunities for students in Kyrgyzstan, including olympiads, competitions, and conferences. On May 8th, as I was mindlessly reading through those channels, trying to find anything at least slightly aligned with my career goals, I stumbled upon a post promoting a cybersecurity competition organized by the [Ala Too University](https://alatoo.edu.kg/) in Bishkek.

It was an olympiad for school students in the format known as CTF, or ["Capture the Flag"](<https://en.wikipedia.org/wiki/Capture_the_flag_(cybersecurity)>). However, at that time, I had absolutely **zero** knowledge of what CTFs even were, and had no experience in cybersecurity either. Still, the post captured my attention, and for the next 30 minutes I frantically researched (googled) how such events were conducted and what a complete newbie like me should learn first in cybersecurity to be able to withstand the intense competition. I am still not sure what exactly pushed me to participate. Maybe the novelty of the event? After all, it was a completely new olympiad format for me personally, so I decided to give it a shot and sign up.

## Preparation

The first half of the olympiad was set for May 12, and it was going to be an online round spanning the entire day from midnight to midnight. I had just four days to prepare. After coming home from school, without wasting a second, I switched my laptop on and began looking for any useful cybersecurity guides. That was when I found a website called [PortSwigger](https://portswigger.net/), which offered many cybersecurity lessons with a short practice problem after each module. Then, after completing a couple of tasks, I realized that it would be better if I installed a program called [Burp Suite](https://portswigger.net/burp) in order to exploit vulnerabilities to the fullest and, you know, actually get stuff done. That piece of software was really interesting to poke around with, and I felt like a member of Anonymous when pressing the "Start Attack" button in Burp Intruder.

Firstly, I started an introductory course titled "Server-side vulnerabilities", which was an introduction to a range of, well... common server-side vulnerabilities, and completed it the next day.
![course completion](/blog-pictures/blog-ctf-img0.png)

I was mostly focused on learning the Web aspect of CTFs, as I thought it would be the main category and therefore worth the most points. After the introductory course, I learned path traversal and finished around two thirds of the course on SQL Injection. I felt ready (sort of) and could already speedrun some of the beginner-friendly tasks on [PicoCTF](https://cylabacademy.org/). The last hours of May 11 were spent practicing and bracing for impact, I suppose.

## The Competition

And so, on May 12 at 0:00, me and my opponents rushed to solve the tasks. There were five main categories: Crypto, Web, Misc, OSINT, and Forensics. I have added a screenshot of the challenges below this paragraph.
![list of challenges](/blog-pictures/blog-ctf-img1.png)

### Web Challenges

Solving the Web category was a breeze. Even my basic knowledge of cybersecurity was enough (again, I only had 4 days to prepare). I solved "Silent protocol" by changing my cookies to make myself an admin, and "Trust Issues" by gaining access to the admin panel (which I found in robots.txt) by intercepting and modifying the traffic. The one called "Leak...", though, was quite a puzzle! Basically, a vulnerable version of the website was exposed in `.git`, and it took me an hour to extract it from the repository as I had no prior experience working with the git-dumper Python package. I was literally solving it **while** reading the git-dumper documentation. It felt like [piloting a plane while reading "So you want to be a pilot"](https://www.reddit.com/r/aviation/comments/ckikby/proof_it_is_never_to_late_to_start/).

### Crypto Challenges

After the Web challenges, I solved everything in the Crypto section. The ciphers there were quite trivial: "Mirrored" just used [Atbash](https://en.wikipedia.org/wiki/Atbash) (a reversed alphabet cipher), "Strangenere" just required you to decrypt a string encoded with [the Vigenere cipher](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher) (and they even provided the key right in the task description). "Alphun" was awesome, though. To solve this challenge, the player was provided with the following image:
![visual cipher](/blog-pictures/blog-ctf-img2.png)

It was a cipher in [brainf\*ck](https://en.wikipedia.org/wiki/Brainfuck). I am not cussing right now, brainf\*ck is the name of an esoteric programming language. After replacing the symbols in the image with the symbols used in brainf\*ck, I got a jumbled string, and after running it through an online cipher recognition tool, I captured the flag.

### School Sidequest

Everything was going great. I even made my way into the Top 7 among all 60+ participants. Then I tried to solve the two remaining sections. OSINT was really painful, and after searching Google Maps for a location for an hour and a half, I gave up and went to sleep. May 12 was still a school day, so after attempting the challenges and staying awake until 3:30 AM, I still had to wake up at 6:30 to go to school. Below is the screenshot of the scoreboard I took before switching my laptop off.
![scoreboard at 3:30AM, May 12](/blog-pictures/blog-ctf-img3.png)

After getting less than three hours of sleep, I begrudgingly left the comfort of my bed and went to the bathroom. I felt BRAINDEAD. Like a zombie. It was a horrible, horrible feeling. My mind was racing, yet I simply could not fully wake up. I ate breakfast, got dressed, and arrived at school at around 7:30 AM. School started at 8:00, so with the time I had left, I went to the library and just fell asleep on one of the bean bags. Then I woke up at 7:54, checked my schedule, and realized that my classes actually started at 9:30 that day, not 8:00. I had never been happier in my life. I took a really awesome nap in the library. After waking up at 9:20, I met my friend, who asked me why I had been online at 3 in the morning. I explained that I was busy doing important cybersecurity stuff, and she was quite impressed (and concerned). Anyway, I just really wanted to share how this competition affected my sleep.

Throughout the day, I discussed the CTF challenges with my friend Kima (not his full name for privacy reasons), who also participated under the nickname "irfadox". Technically, it was an individual olympiad, but we still decided to scout Google Maps together out of curiosity. Sadly, we still couldn't find the location from the OSINT task.

### Back on Track

I returned home at 5 PM, opened my laptop, and was back in the race. "Fairy Tale" in the Misc section was a weird cryptic game created using the Godot engine. At first, I tried to beat the game, but then quickly realized there was no way to. So I simply renamed the file `FairyTaleLike.exe` to `FairyTaleLike.txt` and was able to view parts of the GDScript code. After a quick Ctrl+F, I located the flag.

Both challenges in the Forensics category provided the user with an image. The first image ("Invisible Ink") contained a hidden comment in its metadata. The second image ("Deep Layers") had a string hidden inside it using [Steghide](https://medium.com/@prem112/installation-of-steghide-on-kali-linux-for-steganography-e9cc4d0904ce), and the password was "school". Nothing difficult, one might think, and that would be true. Both tasks can be solved in just a few clicks. However, I previously had no experience analyzing image data, and I spent about two hours messing around with them. At first, I installed a terminal application called [EXIFTool](https://exiftool.org/), which, as I had read, would allow me to inspect the metadata of different images. Unfortunately, it was of no help. After that, I thought there could be a hidden ZIP archive somewhere inside the file, and to look for anything like that I used the [HxD Hex editor](https://mh-nexus.de/en/hxd/).
![me being delusional on HxD](/blog-pictures/blog-ctf-img6.png)

Still, there was nothing inside. Only after a while did I discover [Aperi'Solve](https://www.aperisolve.com/), which is the ultimate online tool for different methods of searching for data hidden in image files, and it finally let me locate the flags. After two hours of scavenging for anything useful, I was finally ready to move on from Forensics.

The last challenge I was able to solve was "Droned". It was a picture taken from a drone, and it was the same picture that Kima and I had been trying to locate on Google Maps. I would not have been able to solve it without him. While I was taking a short break from the CTF, he messaged me and sent a screenshot of the Google Maps location that exactly matched the provided image. In exchange, I gave him a hint for another task.

### The Pain

I was not able to solve anything after "Droned". Four challenges were left, but they just felt impossible to crack. I think I need to practice OSINT more in order not to end up in such a situation again.

However, I felt like I was close to solving the challenge "Hacking the Portal", which, by the way, had no solutions from any other players. Basically, it provided an image of a Soviet-era building somewhere in Bishkek, but it didn't ask for the name or location of that building. Instead, it said that the building had a special code name in some game about portals, and we had to find that secret name. The file was named `agent12.jpg`:
![a Soviet-era building somewhere in Bishkek](/blog-pictures/blog-ctf-img4.png)

I knew that the game in question was [Ingress](<https://en.wikipedia.org/wiki/Ingress_(video_game)>). It's a pretty niche game (at least in Kyrgyzstan) that uses AR to display portals in the real world. In the game, two factions fight for control over portals, or something along those lines, and the players are called agents. It was a perfect match. I just had to find the location of that building on the real map of Bishkek, go to the same location on the Ingress map, and copy the name of the portal. However, after three hours of searching, I still had no result. I could not find that building anywhere in Bishkek! I even asked my parents whether it looked familiar to them... And so, this challenge remained unsolved as well. Midnight was approaching, and I just accepted my loss and went to the kitchen to have a snack.

The competition ended, and I placed 23rd. Unfortunately, only the players in the first 15 places advanced to the second round, so I sacrificed my sleep for nothing. Or did I?

## Conclusion

Even though I didn't qualify for the second round, I still liked how the olympiad went. It was my first ever CTF, and 23rd place among more than 60 participants is a pretty neat result for someone who had only 3-4 days to learn cybersecurity from scratch. The competition was very strong, and I think I proved to be a worthy opponent. The tasks were engaging and challenging (in a good way), and the organizers made sure to make the event as enjoyable as possible. I think I am going to participate in more CTF olympiads in the future. Cryptic puzzles are definitely my thing (OSINT is an exception, I hate OSINT).

Here is what my journal entry from May 13 has to say about the competition:
![journal entry with conclusion](/blog-pictures/blog-ctf-img5.png)

> "I placed 23rd. What can I say about this event? The experience was quite interesting, and 23rd place for such a newbie as me is not that bad of a result, considering that there were around 60-70 participants in total, and only the first 15 places advanced. I was just 8 places away from victory (even less, as many players shared the same score). But still, it's quite sad that I made so much effort for nothing. We weren't even given a certificate of participation." _(Translated from Russian)_

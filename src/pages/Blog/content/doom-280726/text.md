Since its founding in 1991, [id Software](https://www.idsoftware.com/en) has been one of the most influential video game developers and technology innovators in the industry. Over the years, the studio has created some of gaming's most iconic franchises, including [Wolfenstein](https://en.wikipedia.org/wiki/Wolfenstein), [DOOM](<https://en.wikipedia.org/wiki/Doom_(franchise)>), [Quake](<https://en.wikipedia.org/wiki/Quake_(series)>), and [RAGE](<https://en.wikipedia.org/wiki/Rage_(video_game)>). All of them left a lasting mark on gaming culture.

The original [DOOM (1993)](<https://en.wikipedia.org/wiki/Doom_(1993_video_game)>) became the studio's defining title. It was a great game for its time, however DOOM is remembered for more than its influence on game design. Thanks to its surprisingly portable engine and an amazing community, the game has also become the subject of one of gaming's longest-running jokes: if a device has a screen and a processor, someone will probably try to run DOOM on it.

Performance is rarely the goal and most of these ports run slowly and look horrid. The real attraction is the challenge itself, enthusiasts take joy in proving that the game can be forced onto hardware that was never designed for it.

## DOOM on an E-Reader

![](/blog-pictures/blog-doom-img6.webp)

A working version of DOOM runs on the Kindle 4 e-reader by writing its graphics straight into the memory that controls the screen. The game is built with a specialized set of tools adapted for the device. It can be viewed in Kindle's native greyscale, pure black-and-white, or a dithered black-and-white screen mode that is used by default. The result is a playable classic shooter on hardware designed only for showing text and static images.

[<i class="bi bi-github"></i> **GitHub Link**](https://github.com/Moussto/k4-doom)

## DOOM on Google Sheets

![](/blog-pictures/blog-doom-img0.webp)

The project takes the original DOS version of the game, runs it in a browser-based emulator called js-dos, and then draws every frame by changing the background colors of spreadsheet cells. The game runs at a low resolution of 120 by 80 where each cell acts as one big pixel in a very rough version of the game.

The process is deliberately simple and extremely inefficient. A script watches the emulated game, notices which pixels have changed since the last frame, and sends only those color updates to the spreadsheet. Google Apps Script then recolors the matching cells. Because Google Sheets was never designed to act as a real-time display, the result is extremely slow. Movement feels more like a slideshow than a shooter, and the limited color palette of the spreadsheet further muddies the already blocky picture. Fortunately, performance was never the point!

[<i class="bi bi-youtube"></i> **YouTube Link**](https://youtu.be/sDCdw9NveTg)

[<i class="bi bi-github"></i> **GitHub Link**](https://github.com/moses297/doom-on-google-sheets/)

## DOOM on Mi Band 10

![](/blog-pictures/blog-doom-img4.webp)

The Xiaomi Mi Band 10 is a slim fitness tracker with a small AMOLED screen and a touch-sensitive surface. Its main processor is a specialized chip for which no public development tools were ever released. By reverse-engineering the stock firmware and adapting code from a related leaked SDK, developers reconstructed enough of the hardware interface to write custom software that takes full control of the display and touch controller.

On top of that foundation they ported a compact version of DOOM. The game renders in full 16-bit color at roughly 36 frames per second, rotated and scaled to fit the narrow screen, with on-screen touch zones handling movement, turning, and shooting.

[<i class="bi bi-youtube"></i> **YouTube Link**](https://youtu.be/oFswl8FKiRo)

[<i class="bi bi-github"></i> **GitHub Link**](https://github.com/atc1441/MiBand10-BES2700iMP-BEST1503-Hacking)

## DOOM on an Office Telephone

![](/blog-pictures/blog-doom-img1.webp)

[Neil Bostian](https://neilbostian.github.io/#/), a developer from New York, managed to get the classic 1993 DOOM running on a Polycom VVX600 -- the kind of phone that sits on office desks and usually does nothing more exciting than make calls. The phone has a small touchscreen and a standard keypad, and under the hood it runs a simple version of Linux.

After years of experimenting, the creator found a way to take control of the device by uploading custom files through its poorly protected admin tools. Once he had full access, he wrote tiny programs that talked directly to the phone's screen and buttons. Those programs let DOOM draw its graphics on the little display and respond to presses on the keypad.

The project has no sound and the controls take some getting used to, but who cares.

[<i class="bi bi-pen-fill"></i> **Neil Bostian's Blog**](https://neilbostian.github.io/#/doomphone)

## DOOM Played over Audio

![](/blog-pictures/blog-doom-img2.webp)

This version of the game turns every frame into an audio signal. When that signal is fed into a spectrogram (a tool that turns sound into a visual map of frequencies) the game's graphics appear as shifting patterns of color. Controls work in reverse: pure tones at specific frequencies are interpreted as key presses, so movement and shooting are triggered by generating the right sounds. In the end you get a fully playable DOOM that exists entirely as audio output and audio input.

[<i class="bi bi-youtube"></i> **YouTube Link**](https://youtu.be/wv8YSr19vFY)

[<i class="bi bi-github"></i> **GitHub Link**](https://github.com/wojciech-graj/doom-audio/tree/master)

## DOOM on E. Coli

![](/blog-pictures/blog-doom-img7.webp)

In 2023, biological engineering PhD candidate [Lauren Ramlan](https://design.mit.edu/community/people/lauren-ramlan) was working on a project that used [E. coli](https://en.wikipedia.org/wiki/Escherichia_coli) cells to display interactive digital media. The idea was to treat colonies of E. coli as tiny lights that could form a simple black-and-white screen. Each colony would glow when given a chemical signal and stay dark when the signal was left out, creating a grid of glowing and non-glowing spots that together formed the game’s pictures.

To test the concept, the student built a computer model of a common genetic switch that makes bacteria produce a green glow. The model was then fed simplified frames from DOOM, deciding which spots should receive the chemical and which should not. The simulation showed how the glow would rise and fall in each spot over time.

The numbers turned out to be extremely slow. A single glowing spot takes about seventy minutes to reach full brightness and more than eight hours to fade again. At that pace, finishing an entire game of DOOM would take nearly six hundred years.

[<i class="bi bi-youtube"></i> **YouTube Link**](https://youtu.be/8DnoOOgYxck)

[<i class="bi bi-code-slash"></i> **Source Code**](https://colab.research.google.com/drive/1ZnWzeqKxjQSK2VTnfFzna0mFfseVMsZR?usp=sharing#scrollTo=NmgD4i3nAorY)

[<i class="bi bi-file-earmark-font-fill"></i> **Project Write-Up**](https://docs.google.com/document/d/1SFm1dS6myqq7psBKttP7CVYN4jO66lOp7ZMA829c_hc/edit?usp=sharing)

## DOOM on a Treadmill

![](/blog-pictures/blog-doom-img3.webp)

Getting DOOM to run on a gym treadmill or elliptical sounds like a joke, but it is entirely possible on certain Life Fitness machines. These devices run an older version of Android, and their official software updates are delivered through a simple USB flash drive. By modifying the update package, a determined person can insert an Android port of DOOM (and a basic file manager) into the system. Once the machine finishes the "update", the game appears as a normal option in the equipment's own menu.

The practical side is less elegant. The console times out if the user stops moving for more than a few seconds, so continuous exercise is required while playing. There is no multitouch support, which makes simultaneous movement and shooting awkward, and accidental taps can bring up the workout interface.

[<i class="bi bi-reddit"></i> **Reddit Link**](https://www.reddit.com/r/itrunsdoom/s/FJQX9neaEG)

## DOOM in Claude and ChatGPT

![](/blog-pictures/blog-doom-img5.webp)

This project allows DOOM to be launched directly inside conversations with Claude or ChatGPT. A lightweight web version of the game is hosted alongside a small server that these AI systems can talk to. When a user asks the model to start a session, the server returns a signed link (or an inline widget) that opens a playable instance of DOOM either in a new tab or embedded right in the chat interface.

[<i class="bi bi-camera-reels-fill"></i> **Video Showcase**](https://chrisnager.com/images/blog/doom-runs-in-chatgpt-and-claude/chrisnager-doom-claude-web.mp4)

[<i class="bi bi-github"></i> **GitHub Link**](https://github.com/chrisnager/chrisnager-dot-com/pull/54)

---

### Sources

- https://www.idsoftware.com/en
- https://canitrundoom.org/
- https://www.xda-developers.com/7-weirdest-devices-doom-has-been-ported-to-that-you-can-actually-play/

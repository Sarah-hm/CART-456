# CART - 456 : Computation Lab Internship

## Weekly agenda and journal

1. [Week 1](#week-1)
2. [Week 2](#week-2)
3. [Week 3](#week-3)
4. [Week 4](#week-4)
5. [Week 5](#week-5)
6. [Week 6](#week-6)
7. [Week 7](#week-7)

### Week 1

#### Agenda:

Review of proposal;

- Review of outline (263) - Week 1 : outline review - Week 2 : Javascript review (Constants, Object parameters, First-class functions)
  1st and 2nd workshop<br>
- 1st Workshop: OOP / P5 to vanilla, documentation workshop —
- 2nd workshop: continuation or student choice (questionnaire)
  tips for doing a workshops
  How should I break it down? What’s too little, what’s too much?
  Finding the right pace
- Timeline: January 26th and February 9th

#### Journal

While writing my ([very modest](https://sarah-hm.github.io/CART-456/p5-and-beyond/)) game for my P5 to Vanilla JavaScript workshop, I was reminded of one of my main challenges during my first Creative Computation courses. For one, I lacked perspective on the greater scope of vanilla JavaScript and what it could do better than P5. However, that made me mostly fail to recognize how P5 could work within other native JavaScript, HTML and CSS functions, to access its full potential.<br>
<br>
Instead of designing the original intended workshop, aiming to translate as accurately as possible a P5 project unto vanilla JavaScript, I’ve decided to tweak it in a way that shows how P5 and vanilla can be used to their advantages and work better, together.
P5.js is a great tool to visualize designs and games; however, it is not incredible at navigation systems, which a lot of interfaces require. On the other hand, HTML and JavaScript’s event listeners do a pretty great job at managing such tasks, namely with buttons; they are however not so easy to use to sketch drawings as P5 is. Inspired by projects like Vera Van Der Seyp's [Computational Knitting](https://www.media.mit.edu/projects/computational-knitting-patterns/overview/) projects that blends [HTML form and P5 canvas](https://knit.veravandeseyp.com/), I aim to show students that P5 can be used in myriad conjonctions with vanilla JavaScript and other libraries.<br>
<br>
In this small 2 hour workshop, I will overview three different options/versions of how to create a button using P5 and/or vanilla JavaScript: one using only P5 shapes and texts, one using a P5 function that dynamically creates an HTML button, and one using a native HTML button with a javaScript event listener.
In [js/script-p5.js](https://github.com/Sarah-hm/CART-456/blob/main/p5-and-beyond/js/script-p5.js), I am starting by showing how I would have originally done a button, when I was taking 253-263; the rect() and text() method with long if() statements on the whereabouts of the mouseX/mouseY work, but the method remains long and unnecessary. In [method 1)](https://sarah-hm.github.io/CART-456/p5-and-beyond/index-p5.html), we will create a button using only P5 shapes, texts and event listeners, so everyone is on the same page.<br>
<br>
I stumbled upon the P5 createButton() function as I was making my way through P5 documentation, and thought it could be a good bridge to explain how exactly P5 dynamically creates HTML tags on the document. CreateCanvas() remains a bit of an abstract function that we just learn we should be doing; I hope that by explaining what createButton() is and further down how to create a button manually, that the functionality of createCanvas() also becomes clearer for students. The P5 createButton() function lacks extensive customization options, hence becomes a good transition into HTML button tags and CSS properties.<br>
<br>
The third method, in [js/script.js](https://github.com/Sarah-hm/CART-456/blob/main/p5-and-beyond/js/script.js), is more extensive and uses HTML, CSS, vanilla JavaScript and the P5 canvas. I originally thought I wanted to translate the entirety of the canvas onto a no-dependency project. I am now more incline to showing how the best parts of P5 can be taken to their full potential if we remove from the canvas what other parts of (vanilla) JavaScript, HTML, and CSS do more efficiently. Taking the quite universal button as an example, I’ll overview the document’s hierarchy, class and ID naming system, function callbacks within the tags, and all relevant CSS properties.<br>
<br>
I aim to showcase how HTML and vanilla JavaScript manage navigation and event listeners efficiently and how to incorporate their advantages with what students have already learned about P5. One of the most awkward memory of my first year in CART is not knowing how to use the P5 canvas within the greater HTML document; the abstraction of coding was overwhelming and I just could not bring myself to visualize that bridge in my head. I hope that bringing a purely P5 constructed function into a more efficient native ‘equivalent’, while keeping the same canvas (and player) interaction, will be a clear example for students on how to make P5 work in the larger scope of JavaScript.<br>

#### Workshop

Title: JavaScript with P5 & Beyond (ft. HTML and CSS)<br>
Date: January 26th, 2024<br>
Time: 2 pm to 5 pm;<br>
Location: 7.745 (Garage door classroom by the elevators)<br>
Overview: Develop an understanding of vanilla JavaScript and how to incorporate it with the P5 canvas. Using P5 sketching functions introduced in CART-253, we will transfer user interaction to a navigation system using HTML tags and native JavaScript event listeners.
Required level: some P5.js, minimal HTML, CSS can help but not required.<br>
Material requirement: bring your own machine with code editor installed (e.g., Visual Code)<br>

### Week 2

#### Agenda:

Sabine meeting on 23rd at 1pm.
Agenda:

- Review Workshop outline + files;
- Edits based on review + final outline;
- Workshop prep (room, sending files, admin, etc);
- Project Research prep;
- January 26th: Workshop I

#### To do

- Editing the workshop files, making the outline, and preparing all the resources for the event;
- Teaching the workshop (crying face emoji);
- Figuring it out the move for my internship project/workshop II;
- Second JavaScript workshop ???

#### Journal

I survived my first ever workshop, so that is one thing. <br>

Turn out was low, but it made me more comfortable to approach the subject in a more intimate way. I believe there is also much to learn on the organization and advertisement of such events, but that will only come with practice. Doing a workshop at the very beginning of the semester was already a long-shot, but I remain very pleased with how it turned out. <br>
I was not only able to go through the material mostly unscathed, but I also genuinely sensed that I was driving a point across. With the advice of Sabine, I finished off with a very short exercise to build upon the files we had overviewed. The participants each found ways to further their documentation skills and find new events to impact different things on and off the canvas. I appreciated the variety of interests as well; from setting intervals with mousedown() and mouseup(), to styling through CSS event selectors. I really enjoyed assisting them through both the questions they had during, and after the workshop.<br>
I am overall very happy with the result—could have been better, but there is always space for improvement, which is a pretty good thing. I am disappointed I forgot to record the workshop as requested (re: crying face emoji), making me appreciate Sabine’s presence at the workshop that much more. I am feeling better equipped for the next one—which I am already looking forward to. <br>
<br>
However, I need to start focusing on my main project a little bit more. I had wildly underestimated the resources needed to produce and give a workshop, especially one you know the subject of very well. It is one thing to know JavaScript, but to break it down in manageable and practical pieces, and then actually teaching it, is an entire other ordeal. <br>
I want to avoid incapacitating the development of my project by giving two workshop on JavaScript at the very beginning of the semester, as I originally intended. I am most definitely set on learning openFrameworks, as it would allow me to experiment with real-time video mapping in junction with Arduino—but for that, I need to dive deep into C++, which I have not done in years. I am also adamant that on top of my own openFrameworks project, I will be producing a introductory workshop on the framework set to be on March 22nd. To be able to fulfill my (C++) goals elegantly, I may have to rethink and discuss the feasibility of the second JavaScript workshop.

### Week 3

#### Agenda

Sabine meeting on 30th at 2pm.
Agenda:

- Debrief workshop;
- JavaScript second workshop (?);
- TouchDesigner 100 series.

#### To do

- Derivative TouchDesigner 100 series [here](https://learn.derivative.ca/courses/100-fundamentals/lessons/101-navigating-the-environment/)
- Exploring how to utilize TD as a framework for a large scope project

#### Journal

While my resources were stretched thin this past week, my clumsy overestimation of my capacity to gather python skills like a breeze made me fail my intended goal of going through the full Derivative tutorials. I rather spent time doing all the exercises overviewed in the tutorials and furthering them instead. I went through all the TOPs and CHOPs tutorials—sprinkled with other bits of other operators, and was already overwhelmed by the affordances that the framework has. I have not done extensive math in a while; the idea of having to (re)assimilate it while building my python understanding is intimidating. I find that going back and producing exercises on my own without the assistance of a ‘live-coding’ session (the video tutorials) to be a worthwhile—though time consuming, methodologies. While the myriad operators expand the possibilities of my project far beyond what I thought was possible, I need to remember exactly what and where they are, and how to use them, if I want them to be beneficial in any capacity.<br>
I know that I want to use camera (kinect) input for my project, so I try to translate most exercises to ways it could be applied to it (using my webcam). Of course, the kinect is used a little differently in TouchDesigner, but I have yet to create structures nuanced enough to actually need that kind of input. I’ll learn more about the 3D aspects of my project in the next chapter on Surface Operators.<br>
The aspect of time will also be very important for my project, so spending more time understanding how to trigger events through different constants was meaningful as well. Even in these simple node structures, I quickly recognized how impactful the refinement of complex mathematical equations was on outputs. More math means more beauty. Who would have thought (I will make myself a few enemies with that one). Needless to say, I am slightly out of my depth when it comes to the abstraction of mathematics. To understand the full scope of TouchDesigner, I may have to spend a chunk of time diving into math notions that are relevant to the framework. But more on that in our meeting.<br>
As for my project, I have many questions that remain unanswered, which I will dive into this week. I know I am producing a TouchDesigner tool to assist in the creation of our project Symphenia, done in the scope of the Convergence Class. My team and I’s project is an amalgam of differently sized canvas, arranged on a wall in a photo gallery fashion. The canvas are discreet objects, fully detached from one another. They should however reaction in unison according to their placement—imagine a ricochet on a liquid surface. I aim to produce a structure that is modular and encompassing enough to allow customization (when we inevitably change our minds 8743892 times on the final look of the thing) with little change on the software side.<br>
<br>
<br>

### Week 4

#### Agenda

Sabine meeting on 7th at 2pm.
Agenda:

- Talking about the project: ideas and limitations
- Python & Math reco

#### To do

- Finish TouchDesigner 100 series Tutorial [here](https://learn.derivative.ca/courses/100-fundamentals/lessons/101-navigating-the-environment/) and, on Sabine's advice, chill out while I figure out what exactly TouchDesigner is, what it’s capable of, and mostly just avoid falling into rabbit holes that are beyond the complexity level that I am at right now.

#### Journal

I finished the tutorials. I don’t feel much more comfortable to start a project from scratch, but I do understand a lot more what TouchDesigner is capable of, and have a general idea of where everything is and how to interact with it. I recognized how fun DAT operators could be in live interactive experiments/experiences, and I’m really excited to start meddling in that. <br>
My main (and maybe only) negative take away from this series is that the Kinect does not, in fact, run on Apple’s arm architecture, the only OS I have available. That limitation creates a bit of a hiccup for my projects, but it will be a good opportunity to research other less mainstream, but perhaps more interesting, data inputs. I can also easily find ways to emulate a Kinect input until I have an non-silicon OS available, if that is the goal. <br>
I also gained a lot of interest in the freedom Python expressions allow in the customization of parameters. A node-based framework can sometimes feel limiting when coming from a more coding oriented practice. The way TD embeds callbacks and allows full custom script writing allows for so much to be done… And may get me in a few endless rabbit holes if I don’t control myself for the time being. <br>
So instead of overdoing it by trying to figure out things far beyond my current skill range, I want to spend the next week documenting myself on specific topics I already have an inclined for, and start a (small) project/exercise based on pre-built TouchDesigner snippets. I would want to:<br>

### Week 5

#### Agenda

- Read more on Python expression documentation, familiarizing myself with TD nomenclature
- Practice OSC input with SIM ZIG app (cellphone sensors’ inputs) or JSON (web file somewhere)
- Practice DAT executes (using OSC input or JSON)
- Exploring TD available snippets and their structures (how are they connected, referenced, binded, …), edit and layer a variety to create a ~final ’perform’ (e.g., Line Mat/vectors from TOPs)
- Explore palette operators (e.g., rgbaDelay, noise, stoner, particleGPU)

#### Journal

This week, I created a few static (non-interactive, non-reactive), two reactive (but non-interactive), and one interactive visualization in TouchDesigner. I mainly explored instancing, OSC, as well as palettes and snippets focused on noise. I also recognized that the 100 series from Derivative I completed was a good entry point for understanding TD’s operators system, but that I needed more in-depth overviews of how to interweave the operators in an comprehensive structure. <br>
I first explored a few different Noise options (TOP and Palette Noise) and recreated the examples from [this tutorial](https://www.youtube.com/watch?v=PIoq2BFtMAc). All examples were fun to create, and quite easily achievable. They all remained very straightforward and TOP-y, holding 5 to 10 nodes at max. Their simplicity helped me better understand the range of affordances Noise operators have, as little shifts in variables were easily observable in the rendered design. <Br>
[![Experiment: TouchDesigner Noise I](https://img.youtube.com/vi/vLSxtlaFN6M/0.jpg)](https://youtube.com/shorts/vLSxtlaFN6M)<br>
https://youtube.com/shorts/vLSxtlaFN6M <br>
[![Experiment: TouchDesigner Noise II](https://img.youtube.com/vi/fGV7VNhaB48/0.jpg)](https://youtu.be/fGV7VNhaB48) <br>
https://youtu.be/fGV7VNhaB48 <br>
<br>
I liked the trial-and-error and unedited nature of the first tutorial (quite realistic), so I watch a second tutorial of that series (TD for beginners) on [instancing](https://www.youtube.com/watch?v=rYet0SwTYa0). The TD instancing functions allow a very similar procedural approach to populating a render as OOP in JS. I gravitate towards OOP a lot for its abstractive and iterative nature, so instancing is a great TD parallel I know I will implement in most, if not all, of my projects. I mixed all the examples with different Noise operators from the previous tutorial, and made the two last reactive to (the default TD provided) audio. <br>
N.b.: The last example uses both audio and noise input to morph its shape, making the effect audio has much less obvious. Important note for future me who loves putting Noise everyone because it looks good (it really does). It may make the interaction more challenging for participants. <br>
[![Experiment: TouchDesigner Instances I](https://img.youtube.com/vi/JD6XrW4TUkg/0.jpg)](https://youtu.be/JD6XrW4TUkg) <br>
https://youtu.be/JD6XrW4TUkg <br>
[![Experiment: TouchDesigner Instances II](https://img.youtube.com/vi/edmwJTNLzuE.jpg)](https://youtu.be/edmwJTNLzuE) <br>
https://youtu.be/edmwJTNLzuE <br>
[![Experiment: TouchDesigner Instances III](https://img.youtube.com/vi/fvFCfll6Nks.jpg)](https://youtu.be/fvFCfll6Nks) <br>
https://youtu.be/fvFCfll6Nks <br>
<br>
Setting the noise rabbit hole aside, I found another [tutorial](https://www.youtube.com/watch?v=SJZIMGg-thY) using instancing to create a mouse reactive wall (of blocks). I wanted to very simply emulate the project Symphenia I am currently developing in collaboration with Illiez Planche, Liana Kaloussian and Antoine Bou Khalil. The mechanical interactive wall is made of hundreds of particles that imprint recognized bodies onto it. While the particles are chaotically shifting colours at a resting state, particles within a silhouette have their colours converge into an average. After recreating the imprint portion of this project using the mouse input, I used [this tutorial](https://www.youtube.com/watch?v=pwwuZj8KK6M&t=661s) to help me set up the OSC from Sim Zig to TD. Using my Iphone front camera depth map, I mapped my recognized body on the block instances’ z translation, forming an imprint very similar to the desired render. <Br>
[![Experiment: TouchDesigner Instances II](https://img.youtube.com/vi/flu-NsYqrYQ.jpg)](https://youtu.be/flu-NsYqrYQ) <br>
https://youtu.be/flu-NsYqrYQ<br>
<br>
While spending some time in exploring new palettes/snippets, I want to further explore Sim Zig’s sensors, namely the ARkit, instancing MATs (ish), DATs and Python expressions. The [ARkit](https://1-10.github.io/zigsim/features/arkit.html) seems much more precise than the depth map I used, providing tracking position points for different objects like face and body. It uses a lot more datapoints than the depth map image which will have me practice DATs in a meaningful way. Building upon my Symphenia prompt, I also want to explore how to set different materials for all instances like shown [in this tutorial](https://www.youtube.com/watch?v=MFNoBVnTqCg). This will also have me practice more python expressions.

### Week 6

#### Agenda

- Explore a new palette operator/operator snippets;
- Zig Sim ARkit / fine tuning depth map;
- MAT instancing with python expressions
- Meeting with Thomas about project

#### Journal

I explored instancing textures with the geo COMP using a few tutorials and its TD native eponym operator snippet. The snippet did not really explain further what I had not already been able to piece together the week prior, and the tutorial I mentioned last week did not work on my end. TD is a rapidly developing platform, and few years old tutorials can easily be deprecated. <br>
The tutorial that worked for me seemed structurally similar to the older examples I found, with added (more recent) functionalities. There does not seem to be a high-level way of instancing materials in the same ways TD instances geometries or other operators, but I am interesting in diving a little deeper on that front. In the meantime, the workarounds are making me attuned to other versatile operators like the Duplicator COMP and the Grid SOP, as well as TD python expressions. <br>
Although I am comfortable in CAD environments, I am not great at render scenes properly using cameras and lighting systems. My aim using TD is to break away from screen-based interactive systems, but it would be interesting to be able to render proper scenes while I still learn. Spending some time tinkering with light and camera angles (orthodox, perspective, …) is meaningful. Some of my experiments look pretty neat, but failing to document them properly with adequate lighting makes me unable to do something meaningful with them. <br>
I also met with Thomas (sensor lab assistant this semester working with Emotibit sensors) to plan a final project. As I approach the final steps of my degree, I believe a comprehensive rendition of my skill sets in a project is more meaningful than spending resources to make another workshop. I will not be working with Thomas in the end, but meeting with him and discussing different input applications for TouchDesigner informed interesting directions my own project could take. <br>
Overall, this week was a lot less streamline than last, and I hit several walls I did not think I would hit. This coming week, I want to spend more time articulating a comprehensive project proposal/outline, and diving even more into the instancing blocks I have encountered this week. I believe it is a bridge I will inevitably have to cross in whatever project I will build in the coming weeks. In doing so, I will also be able to practice python expressions and several operators.<br>

### Notes

Body tracking recognition using the Blob Detection TOP : https://www.youtube.com/watch?v=ZplOrM6G6JI <br>
<br>
Blob track documentation: https://docs.derivative.ca/Blob_Track_TOP
PS1: Blob tracking is only available on (more?) complete (?) versions of TD. Watched the full tutorial because it was interesting, but also not exactly the definition I am looking for. I’d rather go with ARKit/tracking points/depth map fine tuning. It is an interesting tool for a presence trigger (but then you have to record a bunch of environments?)<br>
<br>
Followed this tutorial for more depth map and ARkit with iphone Sim zig: https://www.youtube.com/watch?v=dfKfVJfy7SI&t=197s <br>
<br>
Followed this tutorial for texture instancing: https://www.youtube.com/watch?v=uFFXUPP0cyg<br>
<br>
PS2: NDI in TIP does not work over VPN (e.g., while using within Concordia’s network and using a VPN) <br>

### Week 7

#### Agenda

- Figure out the whole ham radio thing;
- Figure out what data I can gather from ham radio;
- Find "template"/archived data to use as experimentation data;
- Experiment with the data in TouchDesigner

##### Journal

One consistent thing about my practice is finding the answers to my projects’ direction at the near end of their deadline (and always about something to do with chaos, coincidence?). To put you in context, my colleague Jenna and I were talking about the moon, the upcoming eclipse (on April 8th), and all of that astronomic impact (pun intended) on human systems and machine systems. Our research lead towards radio wave emission, specifically amateur radio (or ham radio). In radio, there are different frequencies for categories of communication, namely Broadcast, Transportation (and towing), aircraft, disaster relief, etc. Some of these frequencies are reserved for amateur radio, and can be used for any hobbyist or educational purpose that do not infer monetary compensation of any form. <br>
With this whole ham radio thing, I got inspired to seek out new forms of (analog) data transmission, which I could then visualize using digital tools like TouchDesigner. Falling into the ham radio rabbit hole was an absolute golden nugget; although the technology can be old-ish (10+ years old hardware and open-source softwares), the online and on-air community is still abundant. Conveniently enough, North America is the most popular region for ham radio, with Quebec being the most prevalent user of ham radio in Canada after Ontario (see Radio Amateurs of Canada, Federation des clubs radioamateurs du Quebec, or a simple google search—there are so many forums). Cheap radios need antennas or repeaters, specific amateur radio frequencies that “repeat” or bounce off your signal so it can reach further, to reach more people. Quebec has more than 600 repeaters, 12 are in Montreal, and Concordia University even has one (???). During heightened or esoteric activity (e.g., the eclipse), radio frequencies get inundated by radio amateurs for research (and community) sake. When I say golden nugget. <br>
So that’s on the “how to get enough data” topic; but there is so much more to unpack on the “what data to get” one. Broadly speaking, there are two radio signal one could be dealing with; the traditional sinusoidal sound-wave frequencies one, or the more recent digital radio signalling that uses numerical patterns (or digits) to transfer information. While the latter offers a much more accurate communication, I gravitate towards the former the most, as it offers the noise (read chaos) aspect of frequencies I love and also happens to be on the cheaper side of radio equipment. But more on that later. The point being, the cheaper the (analog) radio, the noisier the receiving signal is (those radio are said to send unintended harmonics, sounds that are transmitted from radio in wide frequencies spaces you are not supposed to transmit on). <br>
However, if I am to use this signal on TouchDesigner, I will regardless need a Digital Signal Processing (DSP) platform to get the analog signal into a readable signal by my computer. Luckily enough, the ham radio community is not only abundant, it is also generous. There are various open-source softwares for programming ham radios (see CHIRP) and processing their signal (see DigiPan, FLDigi, …); most of them are 10+ years old but still very efficient, as the technology has had no need to evolve much. As far as I’ve researched, the only one that is compatible with Mac’s more recent silicon architecture is FLDigi, however. It’s the one I will be using.<br>
So, in this branch of traditional radio, there are ways to plug your analog radio to your computer and process the signal on there using DSP. One data that can be processed is the audio stream coming from the frequency, of course. But radio can also transmit texts, and even images. So why stop at audio? Just because it’s noisier with more unintended harmonics? Meh, not a great reason in my opinion. There are different kinds of Digital Data Modes for ham radio, meaning ways information can be encrypted and transmitted. One of them is PSK31 (Phase Shift Keying, 31 Baud), a keyboard-to-keyboard communication mode (meaning people text rather than talk to each other over radio)*. This mode of communication is especially reliable in inhospitable environments, requiring only a bit rate of 32 bits/second (a number chosen as it equates 50 words/minute, the average typing speed). So it’s reliable, and it’s fast. <br>
But PSK31 is not only reliable and fast, it’s also beautiful. PSK31 displays the spectrograph differently than other conventional audio stream signals, wherein the PSK31’s graph X axis defines the frequency (in MHz) and the Y axis, time (from current time at the top, to ~ seconds old at the bottom (length in seconds depends on memory parameters and interface height). Although I still need to research the reasons for which this display was chosen, I’m not mad about it at all. Commonly called waterfalls, PSK31 displays showcase transmitting stations (frequencies) and the length of their message (time) through a falling array of (generally lighter) bands. These thin bands of radio frequency activity are moved down with time, making the PSK31 appear as a digital (and very Matrix-esque) waterfalls. Beautiful. <br>
To my knowledge, this display only appears in real-time and does not seem to be archived anywhere. I was able to find a 6 minute long audio file of a PSK31 (“or some other media mode”) attached to a png image of its corresponding waterfall on the wayback machine (archive.org), and other PSK audio files, but not a film version of it. But knowing how it is created (from the spectrogram being sliced and layered together over time), there are multiple ways of visualizing that information in similar ways in digital platforms like TouchDesigner. <br>
In my experiments this week, I created visualizations of that archived file’s spectrogram through TD, aiming to produce something inspired by its original waterfall format display. Most of the experiments were done before figuring out that the PSK31 display is actually a sliced spectrogram, so more experimentation is needed to figure out how to visualize the data elegantly and meaningfully. <br>
In the meantime, I’ve spent most of the week working through more CHOPs (channel operators), which deal with mathematical and sound-wave information the most. I’m not specially comfortable with maths, but I’m even less so with sound and music. Although I am finding the experience very rewarding, I am going through it at an humble pace. But I’ve finally found a topic that’s making it very exciting to get into. So, yay. <br>
As for instancing, I may get back to it, but when I find a way to work with TD and not against it. I don’t think it’s meaningful to find a way despite something not working as desired, but to wait for a moment where I’ll be able to manage it with what it’s best able to do. <Br>
<br>
*Another interesting one I research is FT8; works in inhospitable environment, more recent than PSK31, but much slower, coming at a rate of 5 words/minute. <br>

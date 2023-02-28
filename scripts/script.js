new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "Count Me Out",
          artist: "Kendrick Lamar",
          cover: "/img/1.jpg",
          source: "./mp3/1.mp3",
          url: "https://www.youtube.com/watch?v=6nTcdw7bVdc",
          favorited: false
        },
        {
          name: "Beautiful",
          artist: "Hulvey",
          cover: "/img/2.jpg",
          source: "./mp3/2.mp3",
          url: "https://www.youtube.com/watch?v=zDsE4BPuFRQ",
          favorited: true
        },
        {
          name: "No Longer Bound",
          artist: "Forrest Frank - feat. Hulvey",
          cover: "/img/3.jpg",
          source: "/mp3/3.mp3",
          url: "https://www.youtube.com/watch?v=P8vtPmJE1FY",
          favorited: false
        },
        {
          name: "Fivetweezy",
          artist: "KJ-52",
          cover: "/img/4.jpg",
          source: "/mp3/4.mp3",
          url: "https://www.youtube.com/watch?v=ilcWaYxjdE4",
          favorited: false
        },
        {
          name: "BIG!",
          artist: "Miles Minnick - feat. Lecrae",
          cover: "/img/5.jpg",
          source: "/mp3/5.mp3",
          url: "https://www.youtube.com/watch?v=pKCiYZFCAe4",
          favorited: true
        },
        {
          name: "Broke",
          artist: "Lecrae",
          cover: "/img/6.jpg",
          source: "/mp3/6.mp3",
          url: "https://www.youtube.com/watch?v=mrORbZ2dS08",
          favorited: false
        },
        {
          name: "Follow God",
          artist: "Kanye West",
          cover: "/img/7.jpg",
          source: "/mp3/7.mp3",
          url: "https://www.youtube.com/watch?v=PH3KD2bb_yc",
          favorited: true
        },
        {
          name: "Can’t Tell It Al",
          artist: "Hulvey",
          cover: "/img/8.jpg",
          source: "/mp3/8.mp3",
          url: "https://www.youtube.com/watch?v=Imlt9qozNNk",
          favorited: false
        },
        {
          name: "12AM",
          artist: "C A L E B - feat. Gabby Callwood",
          cover: "/img/9.jpg",
          source: "/mp3/9.mp3",
          url: "https://www.youtube.com/watch?v=6Nyf013OSwY",
          favorited: false
        },
        {
          name: "SLEEPIN!",
          artist: "Nobigdyl",
          cover: "/img/10.jpg",
          source: "/mp3/10.mp3",
          url: "https://www.youtube.com/watch?v=862qnK96gs0",
          favorited: false
        },
        {
          name: "church",
          artist: "Samm Henshaw",
          cover: "/img/11.jpg",
          source: "/mp3/11.mp3",
          url: "https://www.youtube.com/watch?v=I_8-P4eZ1jA",
          favorited: false
        },
        {
          name: "WALK",
          artist: "Hulvey, Lecrae",
          cover: "/img/12.jpg",
          source: "/mp3/12.mp3",
          url: "https://www.youtube.com/watch?v=zPy6fnaYbgg",
          favorited: false
        },
        {
          name: "FREEDOM",
          artist: "Jon Batiste",
          cover: "/img/13.jpg",
          source: "/mp3/13.mp3",
          url: "https://www.youtube.com/watch?v=3YHVC1DcHmo",
          favorited: false
        },
        {
          name: "Couch Potato",
          artist: "Jakubi",
          cover: "/img/14.jpg",
          source: "/mp3/14.mp3",
          url: "https://www.youtube.com/watch?v=jRxQleoY270",
          favorited: false
        },
        {
          name: "Joy",
          artist: "Samm Henshaw",
          cover: "/img/15.jpg",
          source: "/mp3/15.mp3",
          url: "https://www.youtube.com/watch?v=1l0TEysjMLo",
          favorited: false
        },
        {
          name: "King Jesus",
          artist: "KB",
          cover: "/img/16.jpg",
          source: "/mp3/16.mp3",
          url: "https://www.youtube.com/watch?v=UDAYlApZEXQ",
          favorited: false
        },
        {
          name: "King Jesus Part II",
          artist: "KB",
          cover: "/img/17.jpg",
          source: "/mp3/17.mp3",
          url: "https://www.youtube.com/watch?v=FwijldaqV1o",
          favorited: false
        },
        {
          name: "Reasons",
          artist: "Hulvey ft. Lecrae, SVRCINA",
          cover: "/img/18.jpg",
          source: "/mp3/18.mp3",
          url: "https://www.youtube.com/watch?v=EvzJsh-SwUo",
          favorited: false
        },
        {
          name: "Praise God",
          artist: "Kanye West",
          cover: "/img/19.jpg",
          source: "/mp3/19.mp3",
          url: "https://www.youtube.com/watch?v=9sJZOGxRxwM",
          favorited: false
        },
        {
          name: "Come Thru Jesus",
          artist: "Lecrae",
          cover: "/img/20.jpg",
          source: "/mp3/20.mp3",
          url: "https://www.youtube.com/watch?v=ayxW88rYix4",
          favorited: false
        },
        {
          name: "Uptown Lady",
          artist: "Jakubi",
          cover: "/img/21.jpg",
          source: "/mp3/21.mp3",
          url: "https://www.youtube.com/watch?v=dsV4SQ_bnRQ",
          favorited: false
        },

      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});

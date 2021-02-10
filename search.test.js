describe( "check search functionality",() =>{
    it("should add error to screen",()=>{
         displayError();
        expect(document.querySelector(".mainWrapperDiv").children[1]).toBeDefined();
        expect(document.querySelector(".errorMessage")).toBeDefined();
    });
    
   it("should provide result",async ()=>{
    await searchFunction();
    expect(result).toBeDefined();
   });

   it("should add cards or error to screen",async ()=>{
    await searchFunction();
   expect(document.querySelector(".mainWrapperDiv").children[1]).toBeDefined();
});
   

});

describe( "check search bar",() =>{
    it("should add navigation buttons",()=>{
        displayNavDiv();
        expect(document.querySelector(".navigationDiv")).toBeDefined();
       });

    it("next button should increment pageIndex",()=>{
        let temp = pageIndex;
        displayNavDiv();
        result = {
            "kind": "youtube#searchListResponse",
            "etag": "dG67NnPISv2e79EWmOlspNZJaUY",
            "nextPageToken": "CA8QAA",
            "regionCode": "IN",
            "pageInfo": {
              "totalResults": 1000000,
              "resultsPerPage": 15
            },
            "items": [
              {
                "kind": "youtube#searchResult",
                "etag": "bOhTGQ9c7wOi7NAxg8FUE2htcD8",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "CA9E4HHHbRk"
                },
                "snippet": {
                  "publishedAt": "2021-02-01T22:00:10Z",
                  "channelId": "UC4mYKePIas5YgGfYZ2J2OxQ",
                  "title": "Sabrina Carpenter - Skin",
                  "description": "Listen to \"Skin\": https://sabrinacarpenter.lnk.to/Skin Follow Sabrina Carpenter: Instagram: http://instagram.com/sabrinacarpenter Twitter: ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/CA9E4HHHbRk/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/CA9E4HHHbRk/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/CA9E4HHHbRk/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "SabrinaCarpenterVEVO",
                  "liveBroadcastContent": "none",
                  "publishTime": "2021-02-01T22:00:10Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "xlEeisL0A0vb5X26Qn8JpWW5rro",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "YOatb_tqKw8"
                },
                "snippet": {
                  "publishedAt": "2021-02-01T18:21:28Z",
                  "channelId": "UCLXzq85ijg2LwJWFrz4pkmw",
                  "title": "Skip &amp; Shannon react to Rams-Lions blockbuster trade for Matthew Stafford - Goff | NFL | UNDISPUTED",
                  "description": "According to multiple reports, the Los Angeles Rams and Detroit Lions made a blockbuster trade over the weekend. Matthew Stafford will be heading to LA in ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/YOatb_tqKw8/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/YOatb_tqKw8/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/YOatb_tqKw8/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "Skip and Shannon: UNDISPUTED",
                  "liveBroadcastContent": "none",
                  "publishTime": "2021-02-01T18:21:28Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "v7rxoh0-2HFAEetS68fTRzaZwTE",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "HKfekmMz2Ss"
                },
                "snippet": {
                  "publishedAt": "2021-02-02T04:22:30Z",
                  "channelId": "UCJ5v_MCY6GNUBTO8-D3XoAg",
                  "title": "Damian Priest vs. The Miz: Raw, Feb. 1, 2021",
                  "description": "With Bad Bunny in his corner, Damian Priest makes his Raw debut in one-on-one action against The Miz. Catch WWE action on WWE Network, FOX, USA ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/HKfekmMz2Ss/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/HKfekmMz2Ss/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/HKfekmMz2Ss/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "WWE",
                  "liveBroadcastContent": "none",
                  "publishTime": "2021-02-02T04:22:30Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "fkzul65dLm2LGBoyiDVAEGau9Pw",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "npfEo4pgQYw"
                },
                "snippet": {
                  "publishedAt": "2021-02-02T04:52:25Z",
                  "channelId": "UCJ5v_MCY6GNUBTO8-D3XoAg",
                  "title": "Alexa Bliss vs. Nikki Cross: Raw, Feb. 1, 2021",
                  "description": "Alexa Bliss continues to play mind games in a one-on-one encounter against her former best friend, Nikki Cross. Catch WWE action on WWE Network, FOX, ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/npfEo4pgQYw/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/npfEo4pgQYw/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/npfEo4pgQYw/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "WWE",
                  "liveBroadcastContent": "none",
                  "publishTime": "2021-02-02T04:52:25Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "Eh-c4HkA0TesKRUA1FCOousU24c",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "AZyHTDIoEtY"
                },
                "snippet": {
                  "publishedAt": "2021-02-01T08:34:59Z",
                  "channelId": "UCJhEfZoLs5P_idxX--yhWOA",
                  "title": "Hamham (71.Bölüm) - Çok Güzel Hareketler 2",
                  "description": "Hamama giren terler “Çok Güzel Hareketler 2” 71. bölümü ile yayında! https://youtu.be/14hUT0K2-WU Çok Güzel Hareketler 2 Resmi Hesapları: ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/AZyHTDIoEtY/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/AZyHTDIoEtY/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/AZyHTDIoEtY/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "Çok Güzel Hareketler",
                  "liveBroadcastContent": "none",
                  "publishTime": "2021-02-01T08:34:59Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "HLj40CQvJHTbylza45DD0jN75DI",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "SKra9MCiVKw"
                },
                "snippet": {
                  "publishedAt": "2021-02-01T06:01:02Z",
                  "channelId": "UCJ5v_MCY6GNUBTO8-D3XoAg",
                  "title": "Bad Bunny takes flight to level The Miz &amp; John Morrison: Royal Rumble 2021 (WWE Network Exclusive)",
                  "description": "Rapper Bad Bunny showed off some sky-scraping abilities to take out the self-proclaimed “Greatest Tag Team of the 21st Century.” Catch WWE action on WWE ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/SKra9MCiVKw/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/SKra9MCiVKw/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/SKra9MCiVKw/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "WWE",
                  "liveBroadcastContent": "none",
                  "publishTime": "2021-02-01T06:01:02Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "awSj6wQh0VHlhYERL8jL6_J7Ghc",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "_rhiS8Hr2Y8"
                },
                "snippet": {
                  "publishedAt": "2021-02-02T01:00:14Z",
                  "channelId": "UCyhBnB7_27lhyaYgjCf9Z4g",
                  "title": "ボス『宇宙人ジョーンズ・夢の国』篇 60秒（字幕あり） 役所広司 トミー・リー・ジョーンズ サントリー CM",
                  "description": "商品名：BOSS オンエア開始日：2021年2月6日 出演者：役所広司／トミー・リー・ジョーンズ ナレーター：大黒和広 使用楽曲名：RAIN 作詞家：FUKASE/SAORI 作曲 ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/_rhiS8Hr2Y8/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/_rhiS8Hr2Y8/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/_rhiS8Hr2Y8/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "サントリー公式チャンネル （SUNTORY）",
                  "liveBroadcastContent": "none",
                  "publishTime": "2021-02-02T01:00:14Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "JKu2iaALAYOByJxGl9HlGIupZXA",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "6_LkohIQ0g4"
                },
                "snippet": {
                  "publishedAt": "2021-02-02T04:59:23Z",
                  "channelId": "UC56gTxNs4f9xZ7Pa2i5xNzg",
                  "title": "Hawa - Hasan Shah | Ramses | Dance Hit 2021",
                  "description": "Hawa by debuting multitalent Hasan Shah is a fun-filled take on the philosophy that life is too short to hold on to toxic relationships. Watch Hasan Shah as the ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/6_LkohIQ0g4/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/6_LkohIQ0g4/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/6_LkohIQ0g4/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "Sony Music India",
                  "liveBroadcastContent": "none",
                  "publishTime": "2021-02-02T04:59:23Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "2qOipiOMAePRndgGQ8poev5bwDI",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "rbJc5aGCkhI"
                },
                "snippet": {
                  "publishedAt": "2021-02-01T16:14:09Z",
                  "channelId": "UCJ5v_MCY6GNUBTO8-D3XoAg",
                  "title": "Full Royal Rumble 2021 results: WWE Now",
                  "description": "WWE Now breaks down the incredible moments from a historic night at Royal Rumble 2021. Catch WWE action on WWE Network, FOX, USA Network, Sony ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/rbJc5aGCkhI/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/rbJc5aGCkhI/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/rbJc5aGCkhI/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "WWE",
                  "liveBroadcastContent": "none",
                  "publishTime": "2021-02-01T16:14:09Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "OESxn_OlPe9bFrHgg88RZ2D0eic",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "JxzbZhA9FPs"
                },
                "snippet": {
                  "publishedAt": "2021-02-02T06:00:03Z",
                  "channelId": "UCAOtE1V7Ots4DjM8JLlrYgg",
                  "title": "Peppa Pig Official Channel | Peppa Pig&#39;s Fun Time at the Children&#39;s Fete",
                  "description": "Subscribe for more videos: http://bit.ly/PeppaPigYT #Peppa #PeppaPig #PeppaPigEnglish ❤️ Watch the latest uploads here!",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/JxzbZhA9FPs/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/JxzbZhA9FPs/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/JxzbZhA9FPs/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "Peppa Pig - Official Channel",
                  "liveBroadcastContent": "none",
                  "publishTime": "2021-02-02T06:00:03Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "Rne_UUn1uKxgWh3ezZLY6UD2Yk4",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "yI8P7o1K5bA"
                },
                "snippet": {
                  "publishedAt": "2021-02-01T18:11:21Z",
                  "channelId": "UCpr5mSSUbIQU816dNjaDdyg",
                  "title": "RIMAR - SNOWMAN (Sia) - SPEKTA SHOW TOP 11 - Indonesian Idol 2021",
                  "description": "SPEKTA03 #SpektaShowTop11 #IdolANewChapter #IdolSpecialSeason It's Indonesian Idol Special Season! Boy William sebagai host Indonesian Idol Special ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/yI8P7o1K5bA/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/yI8P7o1K5bA/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/yI8P7o1K5bA/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "Indonesian Idol",
                  "liveBroadcastContent": "none",
                  "publishTime": "2021-02-01T18:11:21Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "-TUC4VYw8m3f1y-CNS6YHTinTpk",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "kOm0TZtYYG0"
                },
                "snippet": {
                  "publishedAt": "2021-02-01T23:00:25Z",
                  "channelId": "UCzlzGhKI5Y1LIeDJI53cWjQ",
                  "title": "Актеры дубляжа Аниса Муртаева, Дарья Блохина, Альберт Ибрагимов и Карен Арутюнов о своих роликах.",
                  "description": "Аниса Муртаева, Дарья Блохина, Альберт Ибрагимов и Карен Арутюнов вспоминают, как придумали серию роликов про актеров дубляжа, ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/kOm0TZtYYG0/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/kOm0TZtYYG0/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/kOm0TZtYYG0/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "Вечерний Ургант",
                  "liveBroadcastContent": "none",
                  "publishTime": "2021-02-01T23:00:25Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "IpnPYECirrU8z85ppUxP0NOjVho",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "vtbg9Ia0RYQ"
                },
                "snippet": {
                  "publishedAt": "2021-02-02T03:37:15Z",
                  "channelId": "UCmpHPgeCBgvk_fDXZQKsnAA",
                  "title": "Garoto que passou dias acorrentado dentro de tambor pode carregar sequelas para o resto da vida",
                  "description": "Um garoto de 11 anos foi encontrado por policiais militares em uma casa na periferia de Campinas, interior de São Paulo. Ele estava nu, preso dentro do barril, ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/vtbg9Ia0RYQ/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/vtbg9Ia0RYQ/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/vtbg9Ia0RYQ/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "Jornal da Record",
                  "liveBroadcastContent": "none",
                  "publishTime": "2021-02-02T03:37:15Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "ZIFyYDwrtiI-ksd3GjeH7x860vA",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "fDBMj1OcMd0"
                },
                "snippet": {
                  "publishedAt": "2021-02-09T23:15:01Z",
                  "channelId": "UCk8gzAOGprcGAFMWGzZ2zQw",
                  "title": "Cristiano Ronaldo has been &#39;supernatural&#39; for Juventus, but will he leave Juve soon? | ESPN FC",
                  "description": "Two goals in the first leg from Cristiano Ronaldo are enough to send Juventus back to the Coppa Italia final via a 2-1 aggregate victory over Inter Milan.",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/fDBMj1OcMd0/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/fDBMj1OcMd0/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/fDBMj1OcMd0/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "ESPN UK",
                  "liveBroadcastContent": "none",
                  "publishTime": "2021-02-09T23:15:01Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "VtmwSgav9M6S45uxk2v5skp8tbs",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "k-7v0SQc_K4"
                },
                "snippet": {
                  "publishedAt": "2021-02-02T06:30:42Z",
                  "channelId": "UCq-Fj5jknLsUf-MWSy4_brA",
                  "title": "Pehle Pyaar Ka Pehla Gham (Unplugged) Tulsi Kumar | Manan Bhardwaj | Javed Akhtar | T-Series",
                  "description": "Gulshan Kumar And T-Series presents Bhushan Kumar's Pehle Pyaar Ka Pehla Gham (Unplugged) by Tulsi Kumar; music by Manan Bhardwaj. ♪Stream the ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/k-7v0SQc_K4/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/k-7v0SQc_K4/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/k-7v0SQc_K4/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "T-Series",
                  "liveBroadcastContent": "none",
                  "publishTime": "2021-02-02T06:30:42Z"
                }
              }
            ]
          };
        document.querySelector(".next").click();
        expect(pageIndex).toEqual(temp+1);
    });

    it("next button should increment pageIndex",()=>{
        pageIndex = pageIndex + 2;
        let temp = pageIndex;
        displayNavDiv();
        result = {
            "kind": "youtube#searchListResponse",
            "etag": "dG67NnPISv2e79EWmOlspNZJaUY",
            "nextPageToken": "CA8QAA",
            "regionCode": "IN",
            "pageInfo": {
              "totalResults": 1000000,
              "resultsPerPage": 15
            },
            "items": [
              {
                "kind": "youtube#searchResult",
                "etag": "bOhTGQ9c7wOi7NAxg8FUE2htcD8",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "CA9E4HHHbRk"
                },
                "snippet": {
                  "publishedAt": "2021-02-01T22:00:10Z",
                  "channelId": "UC4mYKePIas5YgGfYZ2J2OxQ",
                  "title": "Sabrina Carpenter - Skin",
                  "description": "Listen to \"Skin\": https://sabrinacarpenter.lnk.to/Skin Follow Sabrina Carpenter: Instagram: http://instagram.com/sabrinacarpenter Twitter: ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/CA9E4HHHbRk/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/CA9E4HHHbRk/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/CA9E4HHHbRk/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "SabrinaCarpenterVEVO",
                  "liveBroadcastContent": "none",
                  "publishTime": "2021-02-01T22:00:10Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "xlEeisL0A0vb5X26Qn8JpWW5rro",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "YOatb_tqKw8"
                },
                "snippet": {
                  "publishedAt": "2021-02-01T18:21:28Z",
                  "channelId": "UCLXzq85ijg2LwJWFrz4pkmw",
                  "title": "Skip &amp; Shannon react to Rams-Lions blockbuster trade for Matthew Stafford - Goff | NFL | UNDISPUTED",
                  "description": "According to multiple reports, the Los Angeles Rams and Detroit Lions made a blockbuster trade over the weekend. Matthew Stafford will be heading to LA in ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/YOatb_tqKw8/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/YOatb_tqKw8/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/YOatb_tqKw8/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "Skip and Shannon: UNDISPUTED",
                  "liveBroadcastContent": "none",
                  "publishTime": "2021-02-01T18:21:28Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "v7rxoh0-2HFAEetS68fTRzaZwTE",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "HKfekmMz2Ss"
                },
                "snippet": {
                  "publishedAt": "2021-02-02T04:22:30Z",
                  "channelId": "UCJ5v_MCY6GNUBTO8-D3XoAg",
                  "title": "Damian Priest vs. The Miz: Raw, Feb. 1, 2021",
                  "description": "With Bad Bunny in his corner, Damian Priest makes his Raw debut in one-on-one action against The Miz. Catch WWE action on WWE Network, FOX, USA ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/HKfekmMz2Ss/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/HKfekmMz2Ss/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/HKfekmMz2Ss/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "WWE",
                  "liveBroadcastContent": "none",
                  "publishTime": "2021-02-02T04:22:30Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "fkzul65dLm2LGBoyiDVAEGau9Pw",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "npfEo4pgQYw"
                },
                "snippet": {
                  "publishedAt": "2021-02-02T04:52:25Z",
                  "channelId": "UCJ5v_MCY6GNUBTO8-D3XoAg",
                  "title": "Alexa Bliss vs. Nikki Cross: Raw, Feb. 1, 2021",
                  "description": "Alexa Bliss continues to play mind games in a one-on-one encounter against her former best friend, Nikki Cross. Catch WWE action on WWE Network, FOX, ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/npfEo4pgQYw/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/npfEo4pgQYw/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/npfEo4pgQYw/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "WWE",
                  "liveBroadcastContent": "none",
                  "publishTime": "2021-02-02T04:52:25Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "Eh-c4HkA0TesKRUA1FCOousU24c",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "AZyHTDIoEtY"
                },
                "snippet": {
                  "publishedAt": "2021-02-01T08:34:59Z",
                  "channelId": "UCJhEfZoLs5P_idxX--yhWOA",
                  "title": "Hamham (71.Bölüm) - Çok Güzel Hareketler 2",
                  "description": "Hamama giren terler “Çok Güzel Hareketler 2” 71. bölümü ile yayında! https://youtu.be/14hUT0K2-WU Çok Güzel Hareketler 2 Resmi Hesapları: ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/AZyHTDIoEtY/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/AZyHTDIoEtY/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/AZyHTDIoEtY/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "Çok Güzel Hareketler",
                  "liveBroadcastContent": "none",
                  "publishTime": "2021-02-01T08:34:59Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "HLj40CQvJHTbylza45DD0jN75DI",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "SKra9MCiVKw"
                },
                "snippet": {
                  "publishedAt": "2021-02-01T06:01:02Z",
                  "channelId": "UCJ5v_MCY6GNUBTO8-D3XoAg",
                  "title": "Bad Bunny takes flight to level The Miz &amp; John Morrison: Royal Rumble 2021 (WWE Network Exclusive)",
                  "description": "Rapper Bad Bunny showed off some sky-scraping abilities to take out the self-proclaimed “Greatest Tag Team of the 21st Century.” Catch WWE action on WWE ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/SKra9MCiVKw/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/SKra9MCiVKw/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/SKra9MCiVKw/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "WWE",
                  "liveBroadcastContent": "none",
                  "publishTime": "2021-02-01T06:01:02Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "awSj6wQh0VHlhYERL8jL6_J7Ghc",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "_rhiS8Hr2Y8"
                },
                "snippet": {
                  "publishedAt": "2021-02-02T01:00:14Z",
                  "channelId": "UCyhBnB7_27lhyaYgjCf9Z4g",
                  "title": "ボス『宇宙人ジョーンズ・夢の国』篇 60秒（字幕あり） 役所広司 トミー・リー・ジョーンズ サントリー CM",
                  "description": "商品名：BOSS オンエア開始日：2021年2月6日 出演者：役所広司／トミー・リー・ジョーンズ ナレーター：大黒和広 使用楽曲名：RAIN 作詞家：FUKASE/SAORI 作曲 ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/_rhiS8Hr2Y8/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/_rhiS8Hr2Y8/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/_rhiS8Hr2Y8/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "サントリー公式チャンネル （SUNTORY）",
                  "liveBroadcastContent": "none",
                  "publishTime": "2021-02-02T01:00:14Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "JKu2iaALAYOByJxGl9HlGIupZXA",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "6_LkohIQ0g4"
                },
                "snippet": {
                  "publishedAt": "2021-02-02T04:59:23Z",
                  "channelId": "UC56gTxNs4f9xZ7Pa2i5xNzg",
                  "title": "Hawa - Hasan Shah | Ramses | Dance Hit 2021",
                  "description": "Hawa by debuting multitalent Hasan Shah is a fun-filled take on the philosophy that life is too short to hold on to toxic relationships. Watch Hasan Shah as the ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/6_LkohIQ0g4/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/6_LkohIQ0g4/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/6_LkohIQ0g4/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "Sony Music India",
                  "liveBroadcastContent": "none",
                  "publishTime": "2021-02-02T04:59:23Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "2qOipiOMAePRndgGQ8poev5bwDI",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "rbJc5aGCkhI"
                },
                "snippet": {
                  "publishedAt": "2021-02-01T16:14:09Z",
                  "channelId": "UCJ5v_MCY6GNUBTO8-D3XoAg",
                  "title": "Full Royal Rumble 2021 results: WWE Now",
                  "description": "WWE Now breaks down the incredible moments from a historic night at Royal Rumble 2021. Catch WWE action on WWE Network, FOX, USA Network, Sony ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/rbJc5aGCkhI/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/rbJc5aGCkhI/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/rbJc5aGCkhI/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "WWE",
                  "liveBroadcastContent": "none",
                  "publishTime": "2021-02-01T16:14:09Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "OESxn_OlPe9bFrHgg88RZ2D0eic",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "JxzbZhA9FPs"
                },
                "snippet": {
                  "publishedAt": "2021-02-02T06:00:03Z",
                  "channelId": "UCAOtE1V7Ots4DjM8JLlrYgg",
                  "title": "Peppa Pig Official Channel | Peppa Pig&#39;s Fun Time at the Children&#39;s Fete",
                  "description": "Subscribe for more videos: http://bit.ly/PeppaPigYT #Peppa #PeppaPig #PeppaPigEnglish ❤️ Watch the latest uploads here!",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/JxzbZhA9FPs/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/JxzbZhA9FPs/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/JxzbZhA9FPs/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "Peppa Pig - Official Channel",
                  "liveBroadcastContent": "none",
                  "publishTime": "2021-02-02T06:00:03Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "Rne_UUn1uKxgWh3ezZLY6UD2Yk4",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "yI8P7o1K5bA"
                },
                "snippet": {
                  "publishedAt": "2021-02-01T18:11:21Z",
                  "channelId": "UCpr5mSSUbIQU816dNjaDdyg",
                  "title": "RIMAR - SNOWMAN (Sia) - SPEKTA SHOW TOP 11 - Indonesian Idol 2021",
                  "description": "SPEKTA03 #SpektaShowTop11 #IdolANewChapter #IdolSpecialSeason It's Indonesian Idol Special Season! Boy William sebagai host Indonesian Idol Special ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/yI8P7o1K5bA/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/yI8P7o1K5bA/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/yI8P7o1K5bA/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "Indonesian Idol",
                  "liveBroadcastContent": "none",
                  "publishTime": "2021-02-01T18:11:21Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "-TUC4VYw8m3f1y-CNS6YHTinTpk",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "kOm0TZtYYG0"
                },
                "snippet": {
                  "publishedAt": "2021-02-01T23:00:25Z",
                  "channelId": "UCzlzGhKI5Y1LIeDJI53cWjQ",
                  "title": "Актеры дубляжа Аниса Муртаева, Дарья Блохина, Альберт Ибрагимов и Карен Арутюнов о своих роликах.",
                  "description": "Аниса Муртаева, Дарья Блохина, Альберт Ибрагимов и Карен Арутюнов вспоминают, как придумали серию роликов про актеров дубляжа, ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/kOm0TZtYYG0/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/kOm0TZtYYG0/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/kOm0TZtYYG0/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "Вечерний Ургант",
                  "liveBroadcastContent": "none",
                  "publishTime": "2021-02-01T23:00:25Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "IpnPYECirrU8z85ppUxP0NOjVho",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "vtbg9Ia0RYQ"
                },
                "snippet": {
                  "publishedAt": "2021-02-02T03:37:15Z",
                  "channelId": "UCmpHPgeCBgvk_fDXZQKsnAA",
                  "title": "Garoto que passou dias acorrentado dentro de tambor pode carregar sequelas para o resto da vida",
                  "description": "Um garoto de 11 anos foi encontrado por policiais militares em uma casa na periferia de Campinas, interior de São Paulo. Ele estava nu, preso dentro do barril, ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/vtbg9Ia0RYQ/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/vtbg9Ia0RYQ/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/vtbg9Ia0RYQ/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "Jornal da Record",
                  "liveBroadcastContent": "none",
                  "publishTime": "2021-02-02T03:37:15Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "ZIFyYDwrtiI-ksd3GjeH7x860vA",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "fDBMj1OcMd0"
                },
                "snippet": {
                  "publishedAt": "2021-02-09T23:15:01Z",
                  "channelId": "UCk8gzAOGprcGAFMWGzZ2zQw",
                  "title": "Cristiano Ronaldo has been &#39;supernatural&#39; for Juventus, but will he leave Juve soon? | ESPN FC",
                  "description": "Two goals in the first leg from Cristiano Ronaldo are enough to send Juventus back to the Coppa Italia final via a 2-1 aggregate victory over Inter Milan.",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/fDBMj1OcMd0/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/fDBMj1OcMd0/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/fDBMj1OcMd0/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "ESPN UK",
                  "liveBroadcastContent": "none",
                  "publishTime": "2021-02-09T23:15:01Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "VtmwSgav9M6S45uxk2v5skp8tbs",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "k-7v0SQc_K4"
                },
                "snippet": {
                  "publishedAt": "2021-02-02T06:30:42Z",
                  "channelId": "UCq-Fj5jknLsUf-MWSy4_brA",
                  "title": "Pehle Pyaar Ka Pehla Gham (Unplugged) Tulsi Kumar | Manan Bhardwaj | Javed Akhtar | T-Series",
                  "description": "Gulshan Kumar And T-Series presents Bhushan Kumar's Pehle Pyaar Ka Pehla Gham (Unplugged) by Tulsi Kumar; music by Manan Bhardwaj. ♪Stream the ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/k-7v0SQc_K4/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/k-7v0SQc_K4/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/k-7v0SQc_K4/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "T-Series",
                  "liveBroadcastContent": "none",
                  "publishTime": "2021-02-02T06:30:42Z"
                }
              }
            ]
          };
        document.querySelector(".previous").click();
        expect(pageIndex).toEqual(temp-1);
    });
});
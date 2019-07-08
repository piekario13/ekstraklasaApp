const Queue = {
    queue1: [
        {
            id: 1,
            sched: 'Arka Gdynia - Jagiellonia Białystok',
            result: null
        },
        {
            id: 2,
            sched: 'KGHM Zagłębie Lubin - Cracovia ',
            result: null
        },
        {
            id: 3,
            sched: 'Legia Warszawa - Pogoń Szczecin',
            result: null
        },
        {
            id: 4,
            sched: 'Piast Gliwice - Lech Poznań',
            result: null
        },
        {
            id: 5,

            sched: 'Raków Częstochowa - Korona Kielce',
            result: null
        },
        {
            id: 6,
            sched: 'Wisła Kraków - Śląsk Wrocław',
            result: null
        },
        {
            id: 7,
            sched: 'Wisła Płock - Górnik Zabrze',
            result: null
        },
        {
            id: 8,
            sched: 'ŁKS Łódź - Lechia Gdańsk',
            result: null
        }
    ],

    queue2: [
        {
            id: 1,
            sched: 'Cracovia - ŁKS Łódź',
            result: null
        },
        {
            id: 2,
            sched: 'Górnik Zabrze - KGHM Zagłębie Lubin',
            result: null
        },
        {
            id: 3,
            sched: 'Jagiellonia Białystok - Raków Częstochowa',
            result: null
        },
        {
            id: 4,
            sched: 'Korona Kielce - Legia Warszawa',
            result: null
        },
        {
            id: 5,
            sched: 'Lech Poznań - Wisła Płock',
            result: null
        },
        {
            id: 6,
            sched: 'Lechia Gdańsk - Wisła Kraków',
            result: null
        },
        {
            id: 7,
            sched: 'Pogoń Szczecin - Arka Gdynia',
            result: null
        },
        {
            id: 8,
            sched: 'Śląsk Wrocław - Piast Gliwice',
            result: null
        }
    ],

    queue3: [
        {
            id: 1,
            sched: 'Arka Gdynia - Korona Kielce',
            result: null
        },
        {
            id: 2,
            sched: 'KGHM Zagłębie Lubin - Jagiellonia Białystok',
            result: null
        },
        {
            id: 3,
            sched: 'Legia Warszawa – Śląsk Wrocław',
            result: null
        },
        {
            id: 4,
            sched: 'Piast Gliwice – Pogoń Szczecin',
            result: null
        },
        {
            id: 5,
            sched: 'Raków Częstochowa – Cracovia',
            result: null
        },
        {
            id: 6,
            sched: 'Wisła Kraków – Górnik Zabrze',
            result: null
        },
        {
            id: 7,
            sched: 'Wisła Płock – Lechia Gdańsk',
            result: null
        },
        {
            id: 8,
            sched: 'DŁKS Łódź – Lech Poznań',
            result: null
        }
    ],
    //     const queue4 = [
    //         {
    //             id: 1,
    //             sched: 'Cracovia – Korona Kielce',
    //             result: '--:--'
    //         },
    //         {
    //             id: 2,
    //             sched: 'Górnik Zabrze – Raków Częstochowa',
    //             result: '--:--'
    //         },
    //         {
    //             id: 3,
    //             sched: 'KGHM Zagłębie Lubin – Arka Gdynia',
    //             result: '--:--'
    //         },
    //         {
    //             id: 4,
    //             sched: 'Lech Poznań – Śląsk Wrocław',
    //             result: '--:--'
    //         },
    //         {
    //             id: 5,
    //             sched: 'DLechia Gdańsk – Jagiellonia Białystok',
    //             result: '--:--'
    //         },
    //         {
    //             id: 6,
    //             sched: 'Pogoń Szczecin – Wisła Kraków',
    //             result: '--:--'
    //         },
    //         {
    //             id: 7,
    //             sched: 'Wisła Płock – Legia Warszawa',
    //             result: '--:--'
    //         },
    //         {
    //             id: 8,
    //             sched: 'ŁKS Łódź – Piast Gliwice',
    //             result: '--:--'
    //         }
    //     ];
    //     const queue5 = [
    //         {
    //             id: 1,
    //             sched: 'Arka Gdynia – Lech Poznań',
    //             result: '--:--'
    //         },
    //         {
    //             id: 2,
    //             sched: 'Jagiellonia Białystok – Górnik Zabrze',
    //             result: '--:--'
    //         },
    //         {
    //             id: 3,
    //             sched: 'Korona Kielce – Pogoń Szczecin',
    //             result: '--:--'
    //         },
    //         {
    //             id: 4,
    //             sched: 'Legia Warszawa – KGHM Zagłębie Lubin',
    //             result: '--:--'
    //         },
    //         {
    //             id: 5,
    //             sched: 'Piast Gliwice – Wisła Płock',
    //             result: '--:--'
    //         },
    //         {
    //             id: 6,
    //             sched: 'Raków Częstochowa – Lechia Gdańsk',
    //             result: '--:--'
    //         },
    //         {
    //             id: 7,
    //             sched: 'Wisła Kraków – ŁKS Łódź',
    //             result: '--:--'
    //         },
    //         {
    //             id: 8,
    //             sched: 'Śląsk Wrocław – Cracovia',
    //             result: '--:--'
    //         }
    //     ];
    //     const queue6 = [
    //         {
    //             id: 1,
    //             sched: 'Cracovia – Arka Gdynia',
    //             result: '--:--'
    //         },
    //         {
    //             id: 2,
    //             sched: 'Górnik Zabrze – Korona Kielce',
    //             result: '--:--'
    //         },
    //         {
    //             id: 3,
    //             sched: 'Jagiellonia Białystok – Wisła Kraków',
    //             result: '--:--'
    //         },
    //         {
    //             id: 4,
    //             sched: 'KGHM Zagłębie Lubin – Piast Gliwice',
    //             result: '--:--'
    //         },
    //         {
    //             id: 5,
    //             sched: 'Lechia Gdańsk – Śląsk Wrocław',
    //             result: '--:--'
    //         },
    //         {
    //             id: 6,
    //             sched: 'Pogoń Szczecin – Wisła Płock',
    //             result: '--:--'
    //         },
    //         {
    //             id: 7,
    //             sched: 'Raków Częstochowa – Lech Poznań',
    //             result: '--:--'
    //         },
    //         {
    //             id: 8,
    //             sched: 'ŁKS Łódź – Legia Warszawa',
    //             result: '--:--'
    //         }
    //     ];
    //     const queue7 = [
    //         {
    //             id: 1,
    //             sched: 'Arka Gdynia – Górnik Zabrze',
    //             result: '--:--'
    //         },
    //         {
    //             id: 2,
    //             sched: 'Korona Kielce – Jagiellonia Białystok',
    //             result: '--:--'
    //         },
    //         {
    //             id: 3,
    //             sched: 'Lech Poznań – Cracovia',
    //             result: '--:--'
    //         },
    //         {
    //             id: 4,
    //             sched: 'Legia Warszawa – Raków Częstochowa',
    //             result: '--:--'
    //         },
    //         {
    //             id: 5,
    //             sched: 'Piast Gliwice – Lechia Gdańsk',
    //             result: '--:--'
    //         },
    //         {
    //             id: 6,
    //             sched: 'DrWisła Kraków – KGHM Zagłębie Lubin',
    //             result: '--:--'
    //         },
    //         {
    //             id: 7,
    //             sched: 'DWisła Płock – ŁKS Łódź',
    //             result: '--:--'
    //         },
    //         {
    //             id: 8,
    //             sched: 'Śląsk Wrocław – Pogoń Szczecin',
    //             result: '--:--'
    //         }
    //     ];
    //     const queue8 = [
    //         {
    //             id: 1,
    //             sched: 'Cracovia – Piast Gliwice',
    //             result: '--:--'
    //         },
    //         {
    //             id: 2,
    //             sched: 'Górnik Zabrze – Śląsk Wrocław',
    //             result: '--:--'
    //         },
    //         {
    //             id: 3,
    //             sched: 'Jagiellonia Białystok – Legia Warszawa',
    //             result: '--:--'
    //         },
    //         {
    //             id: 4,
    //             sched: 'KGHM Zagłębie Lubin – Wisła Płock',
    //             result: '--:--'
    //         },
    //         {
    //             id: 5,
    //             sched: 'Korona Kielce – Wisła Kraków',
    //             result: '--:--'
    //         },
    //         {
    //             id: 6,
    //             sched: 'Lechia Gdańsk – Lech Poznań',
    //             result: '--:--'
    //         },
    //         {
    //             id: 7,
    //             sched: 'Pogoń Szczecin – ŁKS Łódź',
    //             result: '--:--'
    //         },
    //         {
    //             id: 8,
    //             sched: 'Raków Częstochowa – Arka Gdynia',
    //             result: '--:--'
    //         }
    //     ];
    //     const queue9 = [
    //         {
    //             id: 1,
    //             sched: 'Cracovia – Legia Warszawa',
    //             result: '--:--'
    //         },
    //         {
    //             id: 2,
    //             sched: 'Lech Poznań – Jagiellonia Białystok',
    //             result: '--:--'
    //         },
    //         {
    //             id: 3,
    //             sched: 'Lechia Gdańsk – Korona Kielce',
    //             result: '--:--'
    //         },
    //         {
    //             id: 4,
    //             sched: 'Piast Gliwice – Raków Częstochowa',
    //             result: '--:--'
    //         },
    //         {
    //             id: 5,
    //             sched: 'Pogoń Szczecin – Górnik Zabrze',
    //             result: '--:--'
    //         },
    //         {
    //             id: 6,
    //             sched: 'Wisła Płock – Wisła Kraków',
    //             result: '--:--'
    //         },
    //         {
    //             id: 7,
    //             sched: 'ŁKS Łódź – Arka Gdynia',
    //             result: '--:--'
    //         },
    //         {
    //             id: 8,
    //             sched: 'Śląsk Wrocław – KGHM Zagłębie Lubin',
    //             result: '--:--'
    //         }
    //     ];
    //     const queue10 = [
    //         {
    //             id: 1,
    //             sched: 'Arka Gdynia – Piast Gliwice',
    //             result: '--:--'
    //         },
    //         {
    //             id: 2,
    //             sched: 'Górnik Zabrze – Lech Poznań',
    //             result: '--:--'
    //         },
    //         {
    //             id: 3,
    //             sched: 'Jagiellonia Białystok – Pogoń Szczecin',
    //             result: '--:--'
    //         },
    //         {
    //             id: 4,
    //             sched: 'KGHM Zagłębie Lubin – ŁKS Łódź',
    //             result: '--:--'
    //         },
    //         {
    //             id: 5,
    //             sched: 'Korona Kielce – Śląsk Wrocław',
    //             result: '--:--'
    //         },
    //         {
    //             id: 6,
    //             sched: 'Legia Warszawa – Lechia Gdańsk',
    //             result: '--:--'
    //         },
    //         {
    //             id: 7,
    //             sched: 'Raków Częstochowa – Wisła Płock',
    //             result: '--:--'
    //         },
    //         {
    //             id: 8,
    //             sched: 'Wisła Kraków – Cracovia',
    //             result: '--:--'
    //         }
    //     ];
    //     const queue11 = [
    //         {
    //             id: 1,
    //             sched: 'Cracovia – Górnik Zabrze',
    //             result: '--:--'
    //         },
    //         {
    //             id: 2,
    //             sched: 'Lech Poznań – Wisła Kraków',
    //             result: '--:--'
    //         },
    //         {
    //             id: 3,
    //             sched: 'Lechia Gdańsk – KGHM Zagłębie Lubin',
    //             result: '--:--'
    //         },
    //         {
    //             id: 4,
    //             sched: 'Piast Gliwice – Legia Warszawa',
    //             result: '--:--'
    //         },
    //         {
    //             id: 5,
    //             sched: 'Pogoń Szczecin – Raków Częstochowa',
    //             result: '--:--'
    //         },
    //         {
    //             id: 6,
    //             sched: 'Wisła Płock – Arka Gdynia',
    //             result: '--:--'
    //         },
    //         {
    //             id: 7,
    //             sched: 'ŁKS Łódź – Korona Kielce',
    //             result: '--:--'
    //         },
    //         {
    //             id: 8,
    //             sched: 'Śląsk Wrocław – Jagiellonia Białystok',
    //             result: '--:--'
    //         }
    //     ];
    //     const queue12 = [
    //         {
    //             id: 1,
    //             sched: 'Arka Gdynia – Lechia Gdańsk',
    //             result: '--:--'
    //         },
    //         {
    //             id: 2,
    //             sched: 'Górnik Zabrze – ŁKS Łódź',
    //             result: '--:--'
    //         },
    //         {
    //             id: 3,
    //             sched: 'Jagiellonia Białystok – Cracovia',
    //             result: '--:--'
    //         },
    //         {
    //             id: 4,
    //             sched: 'KGHM Zagłębie Lubin – Pogoń Szczecin',
    //             result: '--:--'
    //         },
    //         {
    //             id: 5,
    //             sched: 'Korona Kielce – Wisła Płock',
    //             result: '--:--'
    //         },
    //         {
    //             id: 6,
    //             sched: 'Legia Warszawa – Lech Poznań',
    //             result: '--:--'
    //         },
    //         {
    //             id: 7,
    //             sched: 'Raków Częstochowa – Śląsk Wrocław',
    //             result: '--:--'
    //         },
    //         {
    //             id: 8,
    //             sched: 'Wisła Kraków – Piast Gliwice',
    //             result: '--:--'
    //         }
    //     ];
    //     const queue13 = [
    //         {
    //             id: 1,
    //             sched: 'Cracovia – Pogoń Szczecin',
    //             result: '--:--'
    //         },
    //         {
    //             id: 2,
    //             sched: 'Lech Poznań – KGHM Zagłębie Lubin',
    //             result: '--:--'
    //         },
    //         {
    //             id: 3,
    //             sched: 'Lechia Gdańsk – Górnik Zabrze',
    //             result: '--:--'
    //         },
    //         {
    //             id: 4,
    //             sched: 'Legia Warszawa – Wisła Kraków',
    //             result: '--:--'
    //         },
    //         {
    //             id: 5,
    //             sched: 'Piast Gliwice – Korona Kielce',
    //             result: '--:--'
    //         },
    //         {
    //             id: 6,
    //             sched: 'Wisła Płock – Jagiellonia Białystok',
    //             result: '--:--'
    //         },
    //         {
    //             id: 7,
    //             sched: 'ŁKS Łódź – Raków Częstochowa',
    //             result: '--:--'
    //         },
    //         {
    //             id: 8,
    //             sched: 'Śląsk Wrocław – Arka Gdynia',
    //             result: '--:--'
    //         }
    //     ];
    //     const queue14 = [
    //         {
    //             id: 1,
    //             sched: 'Arka Gdynia - Legia Warszawa',
    //             result: '--:--'
    //         },
    //         {
    //             id: 2,
    //             sched: 'Cracovia - Lechia Gdańsk',
    //             result: '--:--'
    //         },
    //         {
    //             id: 3,
    //             sched: 'Górnik Zabrze - Piast Gliwice',
    //             result: '--:--'
    //         },
    //         {
    //             id: 4,
    //             sched: 'Jagiellonia Białystok - ŁKS Łódź',
    //             result: '--:--'
    //         },
    //         {
    //             id: 5,
    //             sched: 'Korona Kielce - KGHM Zagłębie Lubin',
    //             result: '--:--'
    //         },
    //         {
    //             id: 6,
    //             sched: 'Pogoń Szczecin - Lech Poznań',
    //             result: '--:--'
    //         },
    //         {
    //             id: 7,
    //             sched: 'Raków Częstochowa - Wisła Kraków',
    //             result: '--:--'
    //         },
    //         {
    //             id: 8,
    //             sched: 'Śląsk Wrocław - Wisła Płock',
    //             result: '--:--'
    //         }
    //     ];
    //     const queue15 = [
    //         {
    //             id: 1,
    //             sched: 'KGHM Zagłębie Lubin - Raków Częstochowa',
    //             result: '--:--'
    //         },
    //         {
    //             id: 2,
    //             sched: 'Lech Poznań - Korona Kielce',
    //             result: '--:--'
    //         },
    //         {
    //             id: 3,
    //             sched: 'Lechia Gdańsk - Pogoń Szczecin',
    //             result: '--:--'
    //         },
    //         {
    //             id: 4,
    //             sched: 'Legia Warszawa - Górnik Zabrze',
    //             result: '--:--'
    //         },
    //         {
    //             id: 5,
    //             sched: 'Piast Gliwice - Jagiellonia Białystok',
    //             result: '--:--'
    //         },
    //         {
    //             id: 6,
    //             sched: 'Wisła Kraków - Arka Gdynia',
    //             result: '--:--'
    //         },
    //         {
    //             id: 7,
    //             sched: 'Wisła Płock - Cracovia',
    //             result: '--:--'
    //         },
    //         {
    //             id: 8,
    //             sched: 'ŁKS Łódź - Śląsk Wrocław',
    //             result: '--:--'
    //         }
    //     ];
    //     const queue16 = [
    //         {
    //             id: 1,
    //             sched: 'Cracovia - KGHM Zagłębie Lubin',
    //             result: '--:--'
    //         },
    //         {
    //             id: 2,
    //             sched: 'Górnik Zabrze - Wisła Płock',
    //             result: '--:--'
    //         },
    //         {
    //             id: 3,
    //             sched: 'Jagiellonia Białystok - Arka Gdynia',
    //             result: '--:--'
    //         },
    //         {
    //             id: 4,
    //             sched: 'Korona Kielce - Raków Częstochowa',
    //             result: '--:--'
    //         },
    //         {
    //             id: 5,
    //             sched: 'Lech Poznań - Piast Gliwice',
    //             result: '--:--'
    //         },
    //         {
    //             id: 6,
    //             sched: 'Lechia Gdańsk - ŁKS Łódź',
    //             result: '--:--'
    //         },
    //         {
    //             id: 7,
    //             sched: 'Pogoń Szczecin - Legia Warszawa',
    //             result: '--:--'
    //         },
    //         {
    //             id: 8,
    //             sched: 'Śląsk Wrocław - Wisła Kraków',
    //             result: '--:--'
    //         }
    //     ];
    //     const queue17 = [
    //         {
    //             id: 1,
    //             sched: 'Arka Gdynia - Pogoń Szczecin',
    //             result: '--:--'
    //         },
    //         {
    //             id: 2,
    //             sched: 'KGHM Zagłębie Lubin - Górnik Zabrze',
    //             result: '--:--'
    //         },
    //         {
    //             id: 3,
    //             sched: 'Legia Warszawa - Korona Kielce',
    //             result: '--:--'
    //         },
    //         {
    //             id: 4,
    //             sched: 'Piast Gliwice - Śląsk Wrocław',
    //             result: '--:--'
    //         },
    //         {
    //             id: 5,
    //             sched: 'Raków Częstochowa - Jagiellonia Białystok',
    //             result: '--:--'
    //         },
    //         {
    //             id: 6,
    //             sched: 'Wisła Kraków - Lechia Gdańsk',
    //             result: '--:--'
    //         },
    //         {
    //             id: 7,
    //             sched: 'Wisła Płock - Lech Poznań',
    //             result: '--:--'
    //         },
    //         {
    //             id: 8,
    //             sched: 'ŁKS Łódź - Cracovia',
    //             result: '--:--'
    //         }
    //     ];
    //     const queue18 = [
    //         {
    //             id: 1,
    //             sched: 'Cracovia - Raków Częstochowa',
    //             result: '--:--'
    //         },
    //         {
    //             id: 2,
    //             sched: 'Górnik Zabrze - Wisła Kraków',
    //             result: '--:--'
    //         },
    //         {
    //             id: 3,
    //             sched: 'Jagiellonia Białystok - KGHM Zagłębie Lubin',
    //             result: '--:--'
    //         },
    //         {
    //             id: 4,
    //             sched: 'Korona Kielce - Arka Gdynia',
    //             result: '--:--'
    //         },
    //         {
    //             id: 5,
    //             sched: 'Lech Poznań - ŁKS Łódź',
    //             result: '--:--'
    //         },
    //         {
    //             id: 6,
    //             sched: 'Lechia Gdańsk - Wisła Płock',
    //             result: '--:--'
    //         },
    //         {
    //             id: 7,
    //             sched: 'Pogoń Szczecin - Piast Gliwice',
    //             result: '--:--'
    //         },
    //         {
    //             id: 8,
    //             sched: 'Śląsk Wrocław - Legia Warszawa',
    //             result: '--:--'
    //         }
    //     ];
    //     const queue19 = [
    //         {
    //             id: 1,
    //             sched: 'Arka Gdynia - KGHM Zagłębie Lubin',
    //             result: '--:--'
    //         },
    //         {
    //             id: 2,
    //             sched: 'Jagiellonia Białystok - Lechia Gdańsk',
    //             result: '--:--'
    //         },
    //         {
    //             id: 3,
    //             sched: 'Korona Kielce - Cracovia',
    //             result: '--:--'
    //         },
    //         {
    //             id: 4,
    //             sched: 'Legia Warszawa - Wisła Płock',
    //             result: '--:--'
    //         },
    //         {
    //             id: 5,
    //             sched: 'Piast Gliwice - ŁKS Łódź',
    //             result: '--:--'
    //         },
    //         {
    //             id: 6,
    //             sched: 'Raków Częstochowa - Górnik Zabrze',
    //             result: '--:--'
    //         },
    //         {
    //             id: 7,
    //             sched: 'Wisła Kraków - Pogoń Szczecin',
    //             result: '--:--'
    //         },
    //         {
    //             id: 8,
    //             sched: 'Śląsk Wrocław - Lech Poznań',
    //             result: '--:--'
    //         }
    //     ];
    //     const queue20 = [
    //         {
    //             id: 1,
    //             sched: 'Cracovia - Śląsk Wrocław',
    //             result: '--:--'
    //         },
    //         {
    //             id: 2,
    //             sched: 'Górnik Zabrze - Jagiellonia Białystok',
    //             result: '--:--'
    //         },
    //         {
    //             id: 3,
    //             sched: 'KGHM Zagłębie Lubin - Legia Warszawa',
    //             result: '--:--'
    //         },
    //         {
    //             id: 4,
    //             sched: 'Lech Poznań - Arka Gdynia',
    //             result: '--:--'
    //         },
    //         {
    //             id: 5,
    //             sched: 'Lechia Gdańsk - Raków Częstochowa',
    //             result: '--:--'
    //         },
    //         {
    //             id: 6,
    //             sched: 'Pogoń Szczecin - Korona Kielce',
    //             result: '--:--'
    //         },
    //         {
    //             id: 7,
    //             sched: 'Wisła Płock - Piast Gliwice',
    //             result: '--:--'
    //         },
    //         {
    //             id: 8,
    //             sched: 'ŁKS Łódź - Wisła Kraków',
    //             result: '--:--'
    //         }
    //     ];
    //     const queue21 = [
    //         {
    //             id: 1,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 2,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 3,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 4,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 5,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 6,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 7,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 8,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         }
    //     ];
    //     const queue22 = [
    //         {
    //             id: 1,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 2,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 3,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 4,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 5,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 6,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 7,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 8,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         }
    //     ];
    //     const queue23 = [
    //         {
    //             id: 1,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 2,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 3,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 4,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 5,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 6,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 7,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 8,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         }
    //     ];
    //     const queue24 = [
    //         {
    //             id: 1,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 2,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 3,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 4,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 5,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 6,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 7,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 8,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         }
    //     ];
    //     const queue25 = [
    //         {
    //             id: 1,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 2,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 3,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 4,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 5,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 6,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 7,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 8,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         }
    //     ];
    //     const queue26 = [
    //         {
    //             id: 1,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 2,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 3,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 4,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 5,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 6,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 7,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 8,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         }
    //     ];
    //     const queue27 = [
    //         {
    //             id: 1,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 2,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 3,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 4,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 5,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 6,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 7,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 8,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         }
    //     ];
    //     const queue28 = [
    //         {
    //             id: 1,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 2,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 3,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 4,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 5,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 6,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 7,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 8,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         }
    //     ];
    //     const queue29 = [
    //         {
    //             id: 1,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 2,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 3,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 4,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 5,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 6,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 7,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 8,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         }
    //     ];
    //     const queue30 = [
    //         {
    //             id: 1,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 2,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 3,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 4,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 5,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 6,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 7,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         },
    //         {
    //             id: 8,
    //             sched: 'Drużyna - Drużyna',
    //             result: '--:--'
    //         }
    //     ]
};

export default Queue
export const dictionary: StringDictionary = {
    "greetings": {
        "en": "Dear",
        "id": "Hi"
    },
    "invited": {
        "en": "You Are Invited!",
        "id": "Kamu di undang ke"
    },
    "weddingOf": {
        "en": "The Wedding of",
        "id": "Pernikahan antara"
    },
    "groombridename": {
        "en": "Michael and Sonia",
        "id": "Michael dan Sonia"
    },
    "open": {
        "en": "Open",
        "id": "Buka"
    },
    "days": {
        "en": "Days",
        "id": "Hari"
    },
    "hours": {
        "en": "Hours",
        "id": "Jam"
    },
    "minutes": {
        "en": "Minutes",
        "id": "Menit"
    },
    "seconds": {
        "en": "Seconds",
        "id": "Detik"
    },
    "groomandbride": {
        "en": "Groom and Bride",
        "id": "Pengantin Pria dan Pengantin Wanita"
    },
    "and": {
        "en": "And",
        "id": "Dan"
    },
    "sonOf": {
        "en": "Son of",
        "id": "Anak laki laki dari"
    },
    "daughterOf": {
        "en": "Daughter of",
        "id": "Anak perempuan dari"
    },
    "mr": {
        "en": "Mr.",
        "id": "Bapak"
    },
    "ms": {
        "en": "Mrs.",
        "id": "Ibu"
    },
    "holyMatrimony": {
        "en": "Holy Matrimony",
        "id": "Pemberkatan"
    },
    "reception": {
        "en": "Reception",
        "id": "Resepsi"
    },
    "monday": {
        "en": "Monday",
        "id": "Senin"
    },
    "getDirection": {
        "en": "Get Direction",
        "id": "Peta"
    },
    "accessToVenue": {
        "en": "Access to Venue",
        "id": "Akses ke Venue"
    },
    "ballromText": {
        "en": "Ballroom Neo Soho Residence 9th Floor",
        "id": "Ballroom Neo Soho Residence Lantai 9"
    },
    "attendingQuestion": {
        "en": "Are you attending?",
        "id": "Apakah kamu hadir?"
    },
    "useLinkRSVP": {
        "en": "Please use Link shared by Groom & Bride to RSVP.",
        "id": "Mohon menggunakan tautan yang diberikan oleh penganin untuk melakukan RSVP."
    },
    "thankYouRSVP": {
        "en": "Thank you, You are already RSVP, do you want to change?",
        "id": "Terima kasih, kamu sudah melakukan RSVP, apakah ingin mengubah?"
    },
    "changeRSVP": {
        "en": "Change RSVP",
        "id": "Ubah RSVP"
    },
    "fillForm": {
        "en": "Please fill in the form below to RSVP",
        "id": "Mohon isi form di bawah untuk RSVP"
    },
    "yesAttend": {
        "en": "Yes, I will attend",
        "id": "Ya, Saya akan hadir",
    },
    "noAttend": {
        "en": "No, I will no be able to attend",
        "id": "Tidak, Saya tidak dapat hadir",
    },
    "attendance": {
        "en": "Please choose the number of attendance",
        "id": "Pilih jumlah tamu yang akan datang"
    },
    "checkEvent": {
        "en": "Please check to rsvp event",
        "id": "Silahkan centang event yang dihadiri"
    },
    "wishes": {
        "en": "Wishes",
        "id": "Ucapan Harapan"
    },
    "wishesDesc": {
        "en": "We would love to hear from you",
        "id": "Kami ingin mendengar dari anda terkait kami"
    },
    "send": {
        "en": "Send",
        "id": "Kirim"
    },
    "gift": {
        "en": "Wedding Gift",
        "id": "Hadiah Pernikahan"
    },
    "giftDesc": {
        "en": "Your presence and prayers are the greatest wedding gifts we could ever ask for. However, if giving is a sign of love, we are happy to receive it.",
        "id": "Kehadiran dan doa Anda adalah hadiah pernikahan terbesar yang pernah kami minta. Namun, jika memberi adalah tanda cinta, kita akan dengan senang hati menerimanya."
    },
    "oursMemories": {
        "en": "Ours Memories",
        "id": "Kenangan kami"
    },
    "liveStream": {
        "en": "Watch us getting Married Live!",
        "id": "Lihat pernikahan kami secara langsung!"
    },
    "celebrate": {
        "en":"Celebrate Our Love",
        "id":"Rayakan bersama kami"
    }
}

interface Language {
    [en: string]: string;
}

interface StringDictionary {
    [index: string]: Language;
}

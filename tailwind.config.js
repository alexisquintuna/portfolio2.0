/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'mainColor': '#161A1C',
      'grayColor': '#D2DBDE',
      'greyColor': '#D2DBDE',
      'cardColor': '#D9D9D9',
      'whiteColor': '#ffffff',
      'blackColor': '#000000',
      'red': "#FF0000",
      'blue': "#0000FF",
      'green': "#00FF00",
      'pink': "#D5ADCC"
    },
    fontSize: {
      'navText': ['16px', {
        lineHeight: 'auto',
        letterSpacing: '0em',
        fontWeight: '300',
      }],
      'title': ['12.5rem', {
        lineHeight: 'auto',
        letterSpacing: '0em',
        fontWeight: '500',
      }],
      'mobileTitle': ['7rem', {
        lineHeight: 'auto',
        letterSpacing: '0em',
        fontWeight: '700',
      }],
      'subTitle': ['24px', {
        lineHeight: 'auto',
        letterSpacing: '0em',
        fontWeight: '400',
      }],
      'mobileSubTitle': ['20px', {
        lineHeight: 'auto',
        letterSpacing: '0em',
        fontWeight: '400',
      }],
      'biggerCardTitle': ['64px', {
        lineHeight: 'auto',
        letterSpacing: '0em',
        fontWeight: '600',
      }],
      'muchBiggerCardTitle': ['64px', {
        lineHeight: 'auto',
        letterSpacing: '0em',
        fontWeight: '600',
      }],
      'cardTitle': ['22px', {
        lineHeight: 'auto',
        letterSpacing: '0em',
        fontWeight: '500',
      }],
      'cardSubTitle': ['24px', {
        lineHeight: 'auto',
        letterSpacing: '0em',
        fontWeight: '600',
      }],
      'projectsTitle': ['20px', {
        lineHeight: 'auto',
        letterSpacing: '0em',
        fontWeight: '400',
      }],
      'menuBtn': ['14px', {
        lineHeight: 'auto',
        letterSpacing: '0em',
        fontWeight: '500',
      }],
      'footer': ['16px', {
        lineHeight: 'auto',
        letterSpacing: '0em',
        fontWeight: '400',
      }],
    },
    extend: {
      spacing: {
        'card': '44rem',
        'mobileCard': '40rem',
        'menuScreen': '90vh',
        'cardWidth': '27rem',
        '100': '100%',
        '80': '80%',
        'middlePart': "30rem",
        'middlePartMobile': "40rem"
        // bigcard is 12rem top - 30rem middle - 12rem btm = 54rem
      }
    },
  },
  plugins: [],
}


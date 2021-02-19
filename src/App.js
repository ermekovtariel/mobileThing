import logo from './logo.svg';
import './App.css';

function App() {

  function checkOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(userAgent)) {
      console.log('android')
      return (
        < a href="tg://resolve?domain=[username]" >
          tme
        </a >
      )
    }
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      console.log('iPad|iPhone|iPod')

    }
    if (navigator.appVersion.indexOf("Win") != -1) {
      console.log('Win')
    }
    if (navigator.appVersion.indexOf("Mac") != -1) {
      console.log('Mac')
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://play.google.com/store/apps/details?id=org.telegram.messenger"
          target="_blank"
          rel="noopener noreferrer"
        >
          stickman
        </a>
        {
          checkOperatingSystem()
        }
        {/*  navigator.platform.indexOf() === ("Windows") ? (
             <a href="tg://resolve?domain=[username]">
               tme
              </a>
                ) : (
               <div>
                 Hello
               </div>
             ) */}

        {/* <a onClick={() => navigator.platform === ("Win32") ? "" : alert("")} href = "tg://resolve?domain=[username]">
          telegram
          
        </a> */}
      </header>
    </div>
  );
}

export default App;










// <head>
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="Content-Security-Policy" content="script-src  'sha256-Ci5HNPYwBSR4VHU9hJh95ZFVy6fOb+k1oj6ZuaHln/g=' https://cdn.branch.io https://app.link">
//       <title>BranchWebSDK Demo</title>
//       <script>
//         // load Branch
//     (function(b,r,a,n,c,h,_,s,d,k){if(!b[n]||!b[n]._q){for(;s<_.length; {b[r] = function () { b._q.push([r, arguments]) }},{_q:[],_v:1},"addListener applyCode autoAppIndex banner closeBanner closeJourney creditHistory credits data deepview deepviewCta first getCode init link logout redeem referrals removeListener sendSMS setBranchViewData setIdentity track validateCode trackCommerceEvent logEvent disableTracking".split(" "), 0);
//     // init Branch
//     branch.init('key_live_feebgAAhbH9Tv85H5wLQhpdaefiZv5Dv');
//     var sampleParams = {
//           tags: [ 'tag1', 'tag2' ],
// 			channel: 'sample app',
// 			feature: 'create link',
// 			stage: 'created link',
// 			type: 1,
// 			data: {
//           mydata: 'bar',
// 				'$desktop_url': 'https://cdn.branch.io/example.html',
// 				'$og_title': 'Branch Metrics',
// 				'$og_description': 'Branch Metrics',
// 				'$og_image_url': 'http://branch.io/img/logo_icon_white.png'
// 			}
// 	};

//  	branch.banner({
//           icon: 'http://icons.iconarchive.com/icons/wineass/ios7-redesign/512/Appstore-icon.png',
// 			title: 'Demo App',
// 			description: 'Branch Demo app!',
// 			openAppButtonText: 'Open',
// 			downloadAppButtonText: 'Download',
// 			reviewCount: 1000, // Review count
// 			rating: 5, // Average rating from 0 to 5 in increments of .5
// 			iframe: true, // Show banner in an iframe if CSS on your page is conflicting
// 			showMobile: true, // true by default, just set here for an example
// 			showDesktop: true, // true by default, just set here for an example
// 			disableHide: false, // false by default, just set here for an example
// 			forgetHide: false // false by default, just set here for an example
// 			}, // Banner Options
// 			sampleParams // Link data or string of link
// 	);
//   </script>
// </head>
//     <body>
//       Branch Journey Demo
// </body>

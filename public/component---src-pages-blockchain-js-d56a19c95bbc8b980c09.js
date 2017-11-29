webpackJsonp([29780607615184],{410:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(1),c=l(n),o=a(44),r=l(o),s=a(46),i=l(s),u=function(e){return c.default.createElement("div",{className:"resources__carousel-panel blockchain"},c.default.createElement("div",{className:"resources__banner section"},c.default.createElement("h2",{className:"section__header"},e.data.tabHeader)),c.default.createElement("section",{className:"section section--resources-page"},c.default.createElement("div",{className:"section--resources-page__panel-div"},c.default.createElement("h3",{className:"section--resources-page__subheader"},e.data.whatIsBlockchainSubheader),c.default.createElement("p",{className:"section--resources-page__text"},(0,r.default)(e.data.whatIsBlockchainText1.whatIsBlockchainText1)),c.default.createElement("p",{className:"section--resources-page__text"},e.data.whatIsBlockchainText2.whatIsBlockchainText2),c.default.createElement("p",{className:"section--resources-page__text"},e.data.whatIsBlockchainText3.whatIsBlockchainText3)),c.default.createElement("div",{className:"section--resources-page__panel-div"},c.default.createElement("h3",{className:"section--resources-page__subheader"},e.data.keyPropertiesSubheader),c.default.createElement("p",{className:"section--resources-page__text"},e.data.keyPropertiesText1.keyPropertiesText1),c.default.createElement("ul",{className:"key-properties__list"},c.default.createElement("li",{className:"key-properties__list"},(0,r.default)(e.data.keyPropertiesBullet1.keyPropertiesBullet1)),c.default.createElement("li",{className:"key-properties__list"},(0,r.default)(e.data.keyPropertiesBullet2.keyPropertiesBullet2)),c.default.createElement("li",{className:"key-properties__list"},(0,r.default)(e.data.keyPropertiesBullet3.keyPropertiesBullet3)),c.default.createElement("li",{className:"key-properties__list"},(0,r.default)(e.data.keyPropertiesBullet4.keyPropertiesBullet4)),c.default.createElement("li",{className:"key-properties__list"},(0,r.default)(e.data.keyPropertiesBullet5.keyPropertiesBullet5)))),c.default.createElement("div",{className:"section--resources-page__panel-div"},c.default.createElement("h3",{className:"section--resources-page__subheader"},e.data.componentsOfABlockchainSubheader),c.default.createElement("ul",{className:"components-of-blockchain__list"},c.default.createElement("li",{className:"components-of-blockchain__list-item"},(0,r.default)(e.data.componentsOfABlockchainBullet1.componentsOfABlockchainBullet1)),c.default.createElement("li",{className:"components-of-blockchain__list-item"},c.default.createElement("p",null,e.data.componentsOfABlockchainBullet2)),c.default.createElement("li",{className:"components-of-blockchain__sub-item"},e.data.componentsOfABlockchainBullet2Sub1.componentsOfABlockchainBullet2Sub1),c.default.createElement("li",{className:"components-of-blockchain__sub-item"},e.data.componentsOfABlockchainBullet2Sub2.componentsOfABlockchainBullet2Sub2),c.default.createElement("li",{className:"components-of-blockchain__sub-item"},e.data.componentsOfABlockchainBullet2Sub3.componentsOfABlockchainBullet2Sub3),c.default.createElement("li",{className:"components-of-blockchain__sub-item"},e.data.componentsOfABlockchainBullet2Sub4.componentsOfABlockchainBullet2Sub4)),c.default.createElement("div",{className:"section--resources-page__image-container"},c.default.createElement("img",{src:e.data.componentsOfABlockchainImage.file.url,alt:"Blockchain image"}))),c.default.createElement("div",{className:"section--resources-page__panel-div"},c.default.createElement("h3",{className:"section--resources-page__subheader"},e.data.whoUsesBlockchainSubheader),c.default.createElement("p",{className:"section--resources-page__text"},(0,r.default)(e.data.whoUsesBlockchainText1.whoUsesBlockchainText1)),c.default.createElement("p",{className:"section--resources-page__text"},e.data.whoUsesBlockchainText2.whoUsesBlockchainText2),c.default.createElement("p",{className:"join-text before-disclaimer"},e.data.readyToLearn),c.default.createElement("p",{className:"resources__disclaimer"},(0,r.default)(e.data.disclaimer.disclaimer)))),c.default.createElement(i.default,null))};t.default=u,e.exports=t.default},415:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.query=void 0;var r=a(1),s=l(r),i=a(97),u=(l(i),a(43));a(132);var m=a(82),d=l(m),p=a(38),f=l(p),h=a(26),k=a(410),_=l(k),E=a(110),b=l(E),y=a(49),B=(l(y),a(44)),g=(l(B),function(e){function t(a){n(this,t);var l=c(this,e.call(this,a));return l.state={selectedSectionID:1},l}return o(t,e),t.prototype.componentDidMount=function(){},t.prototype.componentWillUnmount=function(){},t.prototype.render=function(){var e=(this.props.data,this.props.data.contentfulSectionFaq),t=this.props.data.contentfulResourcesPageBlockchain,a=this.props.data.contentfulResourcesPageHowToParticipateTab.loadingSpinner.file.url,l=this.props.location?this.props.location:"",n="https://skratch-ico.surge.sh/blockchain",c="Blockchain Overview | Skratch Token ICO",o="http://images.contentful.com/j5zy0n17n2ql/1GmhwGBo6gUW86A26Ka4Co/cdf5a40df557bfbcb7e7e85390672e03/blockchain.png";return s.default.createElement(f.default,{path:l.pathname,initialStyle:{opacity:.4},transition:h.pageTransition,finalStyle:{opacity:1}},s.default.createElement(u.Helmet,null,s.default.createElement("title",null,c),s.default.createElement("link",{rel:"canonical",href:n}),s.default.createElement("meta",{name:"description",content:"Skratch runs atop the Ethereum and Hyperledger Fabric blockchain. Learn what blockchain is, and how it works."}),s.default.createElement("meta",{name:"robots",content:"noindex, nofollow"}),s.default.createElement("meta",{property:"og:title",content:c}),s.default.createElement("meta",{property:"og:type",content:"article"}),s.default.createElement("meta",{property:"og:url",content:n}),s.default.createElement("meta",{property:"og:image",content:o}),s.default.createElement("meta",{property:"og:description",content:"Skratch runs atop the Ethereum and Hyperledger Fabric blockchain. Learn what blockchain is, and how it works."}),s.default.createElement("meta",{name:"twitter:card",content:"summary"}),s.default.createElement("meta",{name:"twitter:site",content:n}),s.default.createElement("meta",{name:"twitter:title",content:c}),s.default.createElement("meta",{name:"twitter:description",content:"The Skratch marketplace runs atop the Ethereum and Hyperledger Fabric blockchain. Learn how blockchain works:"}),s.default.createElement("meta",{name:"twitter:creator",content:"@skratchcoin"}),s.default.createElement("meta",{name:"twitter:image",content:o})),s.default.createElement("div",{className:"main-content resources"},s.default.createElement(b.default,{spinner:a}),s.default.createElement(_.default,{data:t}),s.default.createElement(d.default,{data:e})))},t}(s.default.Component));g.propTypes={name:s.default.PropTypes.string},t.default=g;t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-blockchain-js-d56a19c95bbc8b980c09.js.map
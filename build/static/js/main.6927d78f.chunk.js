(this.webpackJsonpwebmoviehall=this.webpackJsonpwebmoviehall||[]).push([[0],[,,,,function(e,a,t){e.exports={wrapper:"Info_wrapper__1SubA",imgInfo:"Info_imgInfo__2Rk6F",mainTitle:"Info_mainTitle__2-4uC",container:"Info_container__KMkeW",AboutService:"Info_AboutService__dC8l3",title:"Info_title__2lyqT",description:"Info_description__2tSoI",sep:"Info_sep__3PI-v",myPhoto:"Info_myPhoto__30zwN",photoWrapper:"Info_photoWrapper__rXhdh",linkIcon:"Info_linkIcon__35LZT",devData:"Info_devData__3tdF-",devName:"Info_devName__2QMlS",devRole:"Info_devRole__35rdy",devInfo:"Info_devInfo__1RXUa",skillList:"Info_skillList__YUb85",figureWrapper:"Info_figureWrapper__aVE_-"}},,,,,function(e,a,t){e.exports={localeWrapper:"Navbar_localeWrapper__NPlpd",langBtn:"Navbar_langBtn__2Gs7s",langBtnActive:"Navbar_langBtnActive__1c27O",menuWrapper:"Navbar_menuWrapper__g3088",menuIcon:"Navbar_menuIcon__mf0Xf",wrapper:"Navbar_wrapper__Mf5FH",showMenu:"Navbar_showMenu__3oj9_",link:"Navbar_link__1jvH7",logoBtnActive:"Navbar_logoBtnActive__1RD1e"}},,,,,function(e,a,t){e.exports={wrapper:"VideoPage_wrapper__1r5UF",container:"VideoPage_container__35pnZ",backdropImg:"VideoPage_backdropImg__3cxXL",itemCard:"VideoPage_itemCard__24MTV",imgContainer:"VideoPage_imgContainer__3h5k3",videoTitle:"VideoPage_videoTitle__OM6ZV",videoOverview:"VideoPage_videoOverview__2jxvW",recommendedWrapper:"VideoPage_recommendedWrapper__OWNqk",recommendedTitle:"VideoPage_recommendedTitle__QuRSk"}},,,function(e,a,t){e.exports={wrapper:"Footer_wrapper__1-zHi",linkIcon:"Footer_linkIcon__1KV5c",author:"Footer_author__2wSmW",copyright:"Footer_copyright__3GyYT",linkBtn:"Footer_linkBtn__uc8js"}},,,function(e,a,t){e.exports={search:"Search_search__233Si",mobileSearchBtn:"Search_mobileSearchBtn__2ehrU",searchForm:"Search_searchForm__23B91",showSearchForm:"Search_showSearchForm__2g5xw",searchInput:"Search_searchInput__3ewe5",searchBtn:"Search_searchBtn__28voa"}},function(e,a,t){e.exports={itemCard:"ItemCard_itemCard__cZ69i",itemName:"ItemCard_itemName__WfswN",itemAnnotation:"ItemCard_itemAnnotation__359RJ",imgContainer:"ItemCard_imgContainer__2fdn9"}},function(e,a,t){e.exports={pagination:"TopRatedPage_pagination__16yuN",active:"TopRatedPage_active__3Z-uL"}},,function(e,a,t){e.exports=t.p+"static/media/no-image-available.e1105a56.jpg"},function(e,a,t){e.exports={wrapper:"Header_wrapper__154Bt",headContainer:"Header_headContainer__3Al_k",menuContainer:"Header_menuContainer__34BNV"}},function(e,a,t){e.exports={logoWrapper:"Logo_logoWrapper__A1TSG",logoButton:"Logo_logoButton__27cvU",logo:"Logo_logo__1cFDG"}},,,function(e,a,t){e.exports={wrapper:"Loader_wrapper__1frlu",spinner:"Loader_spinner__3JGnM",spin:"Loader_spin__1VT0y"}},,,,,,function(e,a,t){e.exports={content:"ItemsCollection_content__1EEtx"}},,,function(e,a,t){e.exports={wrapper:"NotFoundPage_wrapper__oy5-f"}},function(e,a,t){e.exports={wrapper:"UrlNotFoundPage_wrapper__uOSkR"}},function(e,a,t){e.exports=t.p+"static/media/heart.78947c6e.png"},function(e,a,t){e.exports=t.p+"static/media/myPhoto_1.882ca956.jpg"},function(e,a,t){e.exports=t.p+"static/media/web-movie-hall-logo.9585d6da.png"},function(e,a,t){e.exports=t(61)},,,,,function(e,a,t){},,,,,,,,,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(34),o=t.n(r),l=(t(48),t(2)),i=t(12),m=t(15),s="/top-rated-movies",u="/top-rated-movies",p="/top-rated-tv",d="/search",v="/tv",_="/movie",g="/no-result",h="/url-not-found",b="/info",f=t(11),E=t.n(f),N=t(18),k=t(28),w=t.n(k),I=function(){var e=Object(n.useState)(!1),a=Object(l.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(null),o=Object(l.a)(r,2),i=o[0],m=o[1];return{loading:t,request:Object(n.useCallback)(function(){var e=Object(N.a)(E.a.mark((function e(a){var t,n,r,o=arguments;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>1&&void 0!==o[1]?o[1]:"GET",c(!0),e.prev=2,e.next=5,fetch(a,{method:t});case 5:return n=e.sent,e.next=8,n.json();case 8:if(r=e.sent,n.ok){e.next=11;break}throw new Error(r.message||"\u0427\u0442\u043e \u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a");case 11:return c(!1),e.abrupt("return",r);case 15:throw e.prev=15,e.t0=e.catch(2),c(!1),m(e.t0.message),e.t0;case 20:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(a){return e.apply(this,arguments)}}(),[]),error:i,clearError:Object(n.useCallback)((function(){return m(null)}),[])}},O=t(7),y=t(6),S=t(5),j=t(29),T=t.n(j);y.b.add(S.d);var C=function(){return c.a.createElement("div",{className:T.a.wrapper},c.a.createElement(O.a,{icon:S.d,className:T.a.spinner}))},x=t(1),R=t.n(x),F=t(24),L=t.n(F),U="https://api.themoviedb.org/3",B="https://image.tmdb.org/t/p/original/",P=t(21),D=t.n(P),W={logoName:"WEB-Movie HALL",totalResults:"total_results",totalPages:"total_pages",movieName:"title",movieOrigName:"original_title",origLang:"original_language",tvName:"name",tvOrigName:"original_name",itemId:"id",itemImg:"poster_path",itemBackdropImg:"backdrop_path",itemOverview:"overview",itemOverviewNotFound:"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u043f\u0435\u0440\u0435\u0432\u043e\u0434 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442. \u041e\u0434\u043d\u0430\u043a\u043e \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u0441 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435\u043c \u043f\u0435\u0440\u0435\u0439\u0434\u044f \u043d\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e \u0441\u0430\u0439\u0442\u0430.",itemRelease:"release_date",itemVote:"vote_average",searchPlaceholder:{"en-US":"Search video","ru-RU":"\u041f\u043e\u0438\u0441\u043a \u0432\u0438\u0434\u0435\u043e"},topRatedMovies:{"en-US":"Top Movies","ru-RU":"\u041b\u0443\u0447\u0448\u0438\u0435 \u0444\u0438\u043b\u044c\u043c\u044b"},topRatedTVs:{"en-US":"Top TV Shows","ru-RU":"\u041b\u0443\u0447\u0448\u0438\u0435 \u0441\u0435\u0440\u0438\u0430\u043b\u044b"},feedback:"Feedback",about:{"en-US":"Info","ru-RU":"\u0418\u043d\u0444\u043e"},searchNotFound:{"en-US":"No results were found for your request. Please, change your query and try again.","ru-RU":"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e \u043f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441 \u0438 \u043f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0435\u0449\u0435 \u0440\u0430\u0437."},urlNotFound:"This is not the web page you are looking for.",recommended:"Recommended"},M=function(e){var a=e.img,t=e.name,n=e.overview,r=n.length>1?n:W.itemOverviewNotFound;return c.a.createElement("div",{className:D.a.itemCard},c.a.createElement("figure",null,c.a.createElement("div",{className:D.a.imgContainer},c.a.createElement("img",{src:null!==a?"".concat(B).concat(a):L.a,alt:"item"})),c.a.createElement("figcaption",null,c.a.createElement("h3",{className:D.a.itemName},t),c.a.createElement("p",{className:D.a.itemAnnotation},r))))};M.defaultTypes={img:R.a.string,name:R.a.string,overview:R.a.string};var V=M,A=t(35),G=t.n(A),H=function(e){var a=e.itemsData,t=void 0===a?[]:a,n=e.product,r=e.locale;return c.a.createElement("div",{className:G.a.content},t.map((function(e){return c.a.createElement(i.b,{to:"/".concat(n,"/").concat(r,"/").concat(e[W.itemId]),key:"link:".concat(e[W.itemId])},c.a.createElement(V,{name:e[W.movieName]||e[W.tvName],img:e[W.itemImg],backdropImg:e[W.itemBackdropImg],overview:e[W.itemOverview],release:e[W.itemRelease],vote:e[W.itemVote],key:e[W.itemId]}))})))};H.defaultProps={itemsData:[]};var q=H,Y=t(22),J=t.n(Y),Z=function(e){var a=e.product,t=void 0===a?"movie":a,r=e.topRated,o=e.locale,i=Object(n.useState)({}),s=Object(l.a)(i,2),u=s[0],p=s[1],d=Object(n.useState)(null),v=Object(l.a)(d,2),_=v[0],h=v[1],b=Object(n.useState)(1),f=Object(l.a)(b,2),k=f[0],O=f[1],y=Object(n.useState)(1),S=Object(l.a)(y,2),j=S[0],T=S[1],x=I(),R=x.loading,F=x.request,L=Object(m.i)().searchData,B=Object(m.g)(),P=Object(m.h)().pathname,D=Object(n.useCallback)(Object(N.a)(E.a.mark((function e(){var a,n,c,l,i;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"979101e3dc251c60c712281e72df7090",a=function(){return L?"search/":""},n=function(){return r?"/top_rated":""},c=function(){return L?"&query=".concat(L):""},l=function(){return"".concat(U,"/").concat(a()).concat(t).concat(n(),"?api_key=").concat("979101e3dc251c60c712281e72df7090","&language=").concat(o).concat(c(),"&page=").concat(_)},e.next=8,F(l(),"GET");case 8:i=e.sent,p(i),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])}))),[F,_,t,L,r,o]);Object(n.useEffect)((function(){h(1)}),[t]),Object(n.useEffect)((function(){D(),window.innerWidth<1e3?(O(1),T(1)):(O(3),T(3)),window.scrollTo(0,0)}),[D,P]);var M=function(e){h(e.selected+1)};return 0===u[W.totalResults]&&B.push("".concat(g,"/").concat(o)),R?c.a.createElement(c.a.Fragment,null,c.a.createElement(C,null),c.a.createElement(w.a,{previousLabel:"<",nextLabel:">",breakLabel:"...",pageCount:u.total_pages,marginPagesDisplayed:k,pageRangeDisplayed:j,onPageChange:M,containerClassName:J.a.pagination,activeClassName:J.a.active})):c.a.createElement(c.a.Fragment,null,!R&&c.a.createElement(c.a.Fragment,null,c.a.createElement(q,{itemsData:u.results,product:t,locale:o})),c.a.createElement(w.a,{previousLabel:"<",nextLabel:">",breakLabel:"...",breakClassName:"break-me",pageCount:u[W.totalPages],marginPagesDisplayed:k,pageRangeDisplayed:j,onPageChange:M,containerClassName:J.a.pagination,activeClassName:J.a.active}))},X=t(14),z=t.n(X),K=function(e){var a=e.product,t=e.locale,r=Object(n.useState)({}),o=Object(l.a)(r,2),i=o[0],s=o[1],u=Object(n.useState)({}),p=Object(l.a)(u,2),d=p[0],v=p[1],_=Object(m.h)().pathname,g=i.overview?i.overview:W.itemOverviewNotFound,h=i[W.itemImg],b=i[W.itemBackdropImg]?"".concat(B).concat(i[W.itemBackdropImg]):"",f=i[W.itemBackdropImg]?{backgroundImage:"url(".concat(b,")")}:{backgroundColor:"var(--seaBlue)"},k=Object(m.i)().id,w=I(),O=w.loading,y=w.request,S=Object(n.useCallback)(Object(N.a)(E.a.mark((function e(){var n,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"979101e3dc251c60c712281e72df7090",n=function(){return"".concat(U,"/").concat(a,"/").concat(k,"?api_key=").concat("979101e3dc251c60c712281e72df7090","&language=").concat(t,"&page=1")},e.next=5,y(n(),"GET");case 5:c=e.sent,s(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),[y,a,k,t]),j=Object(n.useCallback)(Object(N.a)(E.a.mark((function e(){var n,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"979101e3dc251c60c712281e72df7090",n=function(){return"".concat(U,"/").concat(a,"/").concat(k,"/recommendations?api_key=").concat("979101e3dc251c60c712281e72df7090","&language=").concat(t,"&page=1")},e.next=5,y(n(),"GET");case 5:c=e.sent,v(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),[y,a,k,t]);return Object(n.useEffect)((function(){S(),j(),window.scrollTo(0,0)}),[S,j,t,k,_]),O?c.a.createElement(C,null):c.a.createElement(c.a.Fragment,null,!O&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:z.a.wrapper},c.a.createElement("div",{className:z.a.container,style:f},c.a.createElement("figure",{className:z.a.itemCard},c.a.createElement("div",{className:z.a.imgContainer},c.a.createElement("img",{src:h?"".concat(B).concat(h):L.a,alt:"videoPoster"})),c.a.createElement("figcaption",null,c.a.createElement("h2",{className:z.a.videoTitle},i[W.movieName]||i[W.tvName]),c.a.createElement("p",{className:z.a.videoOverview},g)))),c.a.createElement("div",{className:z.a.recommendedWrapper},c.a.createElement("h2",{className:z.a.recommendedTitle},W.recommended)),c.a.createElement(q,{itemsData:d.results,product:a,locale:t}))))},Q=t(38),$=t.n(Q),ee=function(e){var a=e.locale,t=void 0===a?"en-US":a;return c.a.createElement("div",{className:$.a.wrapper},c.a.createElement("h2",null,W.searchNotFound["".concat(t)]))};ee.defaultTypes={locale:R.a.string};var ae=ee,te=t(39),ne=t.n(te),ce=function(){return c.a.createElement("div",{className:ne.a.wrapper},c.a.createElement("h2",null,W.urlNotFound))},re=t(16),oe=t(40),le=t.n(oe),ie=t(41),me=t.n(ie),se={mainTitle:{"en-US":"Hi there...","ru-RU":"\u041f\u0440\u0438\u0432\u0435\u0442 \u0434\u0440\u0443\u0433!"},TMDbTitle:{"en-US":"Some words about TMDb","ru-RU":"\u041d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u043b\u043e\u0432 \u043f\u0440\u043e TMDb, \u043e\u0442\u043a\u0443\u0434\u0430 \u044f \u0431\u0435\u0440\u0443 \u0438\u043d\u0444-\u044e \u0434\u043b\u044f \u0441\u0430\u0439\u0442\u0430"},TMDbDescription:{"en-US":"\"The Movie Database (TMDb) is a community built \n      movie and TV database. Every piece of data has been added \n      by community dating back to 2008. TMDb's strong international focus \n      and breadth of data is largely unmatched and something \n      we're incredibly proud of. Put simply, we live and breathe \n      community and that's precisely what makes us different.\" \xa9(themoviedb.org)","ru-RU":'"\u0411\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445(\u0411\u0414) \u0444\u0438\u043b\u044c\u043c\u043e\u0432 (TMDb) - \u044d\u0442\u043e \u0411\u0414 \u043f\u0440\u043e \u0444\u0438\u043b\u044c\u043c\u044b \u0438 \u0441\u0435\u0440\u0438\u0430\u043b\u044b, \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u0430\u044f \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u043e\u043c. \u041a\u0430\u0436\u0434\u0430\u044f \n      \u0447\u0430\u0441\u0442\u0438\u0447\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u043b\u0430\u0441\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u043e\u043c \u0432 \u0411\u0414 \u0441 2008 \u0433\u043e\u0434\u0430. TMDb \u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u043d\u0430 \u0438\u043d\u0442\u0435\u0440\u043d\u0430\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0438 \u043f\u043e\u043b\u043d\u043e\u0442\u0430 \n      \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0437\u043d\u0430\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u043c\u0435\u0440\u0435 \u0431\u0435\u0441\u043f\u043e\u0434\u043e\u0431\u043d\u0430, \u0447\u0435\u043c \u043c\u044b \u043d\u0435\u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e \u0433\u043e\u0440\u0434\u0438\u043c\u0441\u044f. \u041f\u0440\u043e\u0449\u0435 \u0433\u043e\u0432\u043e\u0440\u044f, \u043c\u044b \u0436\u0438\u0432\u043e\u0435 \u0438 \u0434\u044b\u0448\u0430\u0449\u0435\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u043e, \u0438 \u044d\u0442\u043e \u0438\u043c\u0435\u043d\u043d\u043e \u0442\u043e, \u0447\u0442\u043e \u043d\u0430\u0441 \u0432\u044b\u0434\u0435\u043b\u044f\u0435\u0442."  \xa9(themoviedb.org)'},aboutTitle:{"en-US":"And now, about Me","ru-RU":"\u041d\u0435\u043c\u043d\u043e\u0433\u043e \u043e\u0431\u043e \u043c\u043d\u0435"},devName:{"en-US":"Yevhen Yurchenko","ru-RU":"\u0415\u0432\u0433\u0435\u043d\u0438\u0439 \u042e\u0440\u0447\u0435\u043d\u043a\u043e"},devRole:{"en-US":"Frontend developer","ru-RU":"Frontend developer"},devInfo:{"en-US":["Hello! I am a front-end practitioner. All my work is aimed at achieving such solutions as:","responsive to all devices","usability for users","usability for maintain and updating","availability","perfection","If you have any problem in Frontend that you need to solve, contact me on LinkedIn!"],"ru-RU":["\u041f\u0440\u0438\u0432\u0435\u0442! \u042f \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u044e\u0449\u0438\u0439 Front-end \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a. \u0412\u0441\u0435 \u043c\u043e\u0438 \u0440\u0430\u0431\u043e\u0442\u044b \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b \u043d\u0430 \u0434\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u0435 \u0442\u0430\u043a\u0438\u0445 \u0440\u0435\u0448\u0435\u043d\u0438\u0439, \u043a\u0430\u043a:","\u043e\u0442\u0437\u044b\u0432\u0447\u0438\u0432\u043e\u0441\u0442\u044c \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432","\u0443\u0434\u043e\u0431\u0441\u0442\u0432\u043e \u0432 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c\u0438","\u0443\u0434\u043e\u0431\u0441\u0442\u0432\u043e \u0432 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0435 \u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438","\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u044c","\u0441\u043e\u0432\u0435\u0440\u0448\u0435\u043d\u0441\u0442\u0432\u043e","\u0415\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0430 \u0434\u043b\u044f Frontend \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430, \u0441\u0432\u044f\u0436\u0438\u0442\u0435\u0441\u044c \u0441\u043e \u043c\u043d\u043e\u0439 \u0432 LinkedIn!"]},dev:" Yeuhen",devLink:"https://github.com/Yeuhen",git:"Yeuhen",gitLink:"https://github.com/Yeuhen",linkedIn:"yevhen-yurchenko",linkedInLink:"https://www.linkedin.com/in/yevhen-yurchenko/"},ue=t(4),pe=t.n(ue);y.b.add(re.b);var de=function(e){var a=e.locale,t=se.devInfo["".concat(a)],n=t.slice(1,t.length-1);return c.a.createElement("div",{className:pe.a.wrapper},c.a.createElement("img",{className:pe.a.imgInfo,src:le.a,alt:"heart"}),c.a.createElement("h2",{className:pe.a.mainTitle},se.mainTitle["".concat(a)]),c.a.createElement("div",{className:pe.a.container},c.a.createElement("section",null,c.a.createElement("h3",{className:pe.a.title},se.TMDbTitle["".concat(a)]),c.a.createElement("p",{className:pe.a.description},se.TMDbDescription["".concat(a)]),c.a.createElement("div",{className:pe.a.sep})),c.a.createElement("section",null,c.a.createElement("h3",{className:pe.a.title},se.aboutTitle["".concat(a)]),c.a.createElement("figure",{className:pe.a.figureWrapper},c.a.createElement("div",{className:pe.a.photoWrapper},c.a.createElement("img",{className:pe.a.myPhoto,src:me.a,alt:"myPhoto"}),c.a.createElement("div",null,c.a.createElement("a",{href:se.linkedInLink,target:"_blank",rel:"noopener noreferrer"},c.a.createElement(O.a,{icon:re.b,className:pe.a.linkIcon})))),c.a.createElement("figcaption",{className:pe.a.devData},c.a.createElement("h4",{className:pe.a.devName},se.devName["".concat(a)]),c.a.createElement("p",{className:pe.a.devRole},se.devRole["".concat(a)]),c.a.createElement("div",{className:pe.a.devInfo},c.a.createElement("p",null,t[0]),c.a.createElement("ul",{className:pe.a.skillList},n.map((function(e){return c.a.createElement("li",{key:e.substr(0,20)},e)}))),c.a.createElement("p",null,t[t.length-1])))))))},ve=function(e){var a=(0,e.getLocale)();return c.a.createElement(m.d,null,c.a.createElement(m.b,{path:"/",exact:!0},c.a.createElement(Z,{product:"movie",topRated:!0,locale:a})),c.a.createElement(m.b,{path:"".concat(p,"/:locale"),exact:!0},c.a.createElement(Z,{product:"tv",topRated:!0,locale:a})),c.a.createElement(m.b,{path:"".concat(u,"/:locale"),exact:!0},c.a.createElement(Z,{product:"movie",topRated:!0,locale:a})),c.a.createElement(m.b,{path:"".concat(d,"/:locale/:searchData")},c.a.createElement(Z,{product:"movie",topRated:!1,locale:a})),c.a.createElement(m.b,{path:"".concat(v,"/:locale/:id"),exact:!0},c.a.createElement(K,{product:"tv",locale:a})),c.a.createElement(m.b,{path:"".concat(_,"/:locale/:id"),exact:!0},c.a.createElement(K,{product:"movie",locale:a})),c.a.createElement(m.b,{path:"".concat(b,"/:locale"),exact:!0},c.a.createElement(de,{locale:a})),c.a.createElement(m.b,{path:"".concat(g,"/:locale"),exact:!0},c.a.createElement(ae,{locale:a})),c.a.createElement(m.b,{path:"".concat(h),exact:!0},c.a.createElement(ce,null)),c.a.createElement(m.a,{to:"".concat(h)}))},_e=t(63),ge=t(9),he=t.n(ge);y.b.add(S.a,S.e);var be=function(e){var a=e.handleLocale,t=e.locale,r=Object(n.useState)(!1),o=Object(l.a)(r,2),i=o[0],s=o[1],d=Object(n.useState)(""),v=Object(l.a)(d,2),_=v[0],g=v[1],h=Object(m.g)(),f=i?[he.a.wrapper,he.a.showMenu].join(" "):he.a.wrapper,E=i?S.e:S.a,N=function(){return s(!i)},k=function(e){return _===e?[he.a.langBtn,he.a.langBtnActive].join(" "):he.a.langBtn},w=function(e){Object(_e.a)(["location","pathname"],h)!==e&&h.push("".concat(e,"/").concat(t))};Object(n.useEffect)((function(){g(t)}),[t]);var I=W.topRatedMovies,y=W.topRatedTVs,j=W.about;return c.a.createElement(c.a.Fragment,null,c.a.createElement("ul",{className:he.a.localeWrapper},c.a.createElement("li",null,c.a.createElement("button",{className:k("ru-RU"),onClick:function(){a("ru-RU")}},"RU")),c.a.createElement("li",null,c.a.createElement("button",{className:k("en-US"),onClick:function(){a("en-US")}},"EN"))),c.a.createElement("button",{onClick:N,className:he.a.menuIcon},c.a.createElement(O.a,{icon:E})),c.a.createElement("nav",{className:he.a.menuWrapper},c.a.createElement("ul",{className:f},c.a.createElement("li",null,c.a.createElement("button",{className:he.a.link,onClick:function(){N(),w(u)}},I["".concat(t)])),c.a.createElement("li",null,c.a.createElement("button",{className:he.a.link,onClick:function(){N(),w(p)}},y["".concat(t)])),c.a.createElement("li",null,c.a.createElement("button",{className:he.a.link,onClick:function(){N(),w(b)}},j["".concat(t)])))))},fe=t(25),Ee=t.n(fe),Ne=t(20),ke=t.n(Ne);y.b.add(S.c);var we=function(e){var a=e.locale,t=Object(n.useState)(""),r=Object(l.a)(t,2),o=r[0],i=r[1],s=Object(n.useState)(!1),u=Object(l.a)(s,2),p=u[0],d=u[1],v=Object(m.g)(),_=p?[ke.a.searchForm,ke.a.showSearchForm].join(" "):ke.a.searchForm,g=function(){d(!p)};return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{className:ke.a.mobileSearchBtn,onClick:g},c.a.createElement(O.a,{icon:S.c})),c.a.createElement("form",{action:"#",method:"post",className:_,onSubmit:function(e){e.preventDefault(),v.push("/search/".concat(a,"/").concat(o)),i(""),g()}},c.a.createElement("input",{type:"text",className:ke.a.searchInput,placeholder:W.searchPlaceholder["".concat(a)],value:o,onChange:function(e){i(e.target.value)},name:"searchValue"}),c.a.createElement("button",{type:"submit",className:ke.a.searchBtn},c.a.createElement(O.a,{icon:S.c}))))},Ie=t(42),Oe=t.n(Ie),ye=t(26),Se=t.n(ye),je=function(e){var a=e.locale,t=Object(m.g)(a);return c.a.createElement("div",{className:Se.a.logoWrapper},c.a.createElement("button",{className:Se.a.logoButton,onClick:function(){t.push("".concat(s,"/").concat(a))}},c.a.createElement("img",{src:Oe.a,alt:"logo",className:Se.a.logo})))},Te=function(e){var a=e.handleLocale,t=e.locale;return c.a.createElement("div",{className:Ee.a.wrapper},c.a.createElement("div",{className:Ee.a.headContainer},c.a.createElement(je,{locale:t}),c.a.createElement("div",{className:Ee.a.menuContainer},c.a.createElement(be,{handleLocale:a,locale:t}),c.a.createElement(we,{locale:t}))))},Ce=t(17),xe=t.n(Ce);y.b.add(S.b,re.a,re.b);var Re=function(){return c.a.createElement("div",{className:xe.a.wrapper},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("p",{className:"copyright"},c.a.createElement(O.a,{icon:S.b,className:xe.a.linkIcon}),"2020 visualising TMDb by",c.a.createElement("a",{href:se.devLink,className:xe.a.author},se.dev))),c.a.createElement("li",null,c.a.createElement("a",{href:se.devLink,target:"_blank",rel:"noopener noreferrer",className:xe.a.linkBtn},c.a.createElement(O.a,{icon:re.a,className:xe.a.linkIcon}),c.a.createElement("span",null,se.git))),c.a.createElement("li",null,c.a.createElement("a",{href:se.linkedInLink,target:"_blank",rel:"noopener noreferrer",className:xe.a.linkBtn},c.a.createElement(O.a,{icon:re.b,className:xe.a.linkIcon}),c.a.createElement("span",null,se.linkedIn)))))};t(60);var Fe=function(){var e=Object(n.useState)(""),a=Object(l.a)(e,2),t=a[0],r=a[1];function o(){return null!==JSON.parse(localStorage.getItem("lang"))?JSON.parse(localStorage.getItem("lang")):"ru-Ru"}return Object(n.useEffect)((function(){r(o())}),[]),c.a.createElement(i.a,null,c.a.createElement("div",{className:"wrapper"},c.a.createElement(Te,{handleLocale:function(e){localStorage.setItem("lang",JSON.stringify(e)),r(e)},locale:t}),c.a.createElement("div",{className:"container"},c.a.createElement(ve,{getLocale:o})),c.a.createElement(Re,{locale:t})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Le=document.getElementById("root");o.a.render(c.a.createElement(Fe,null),Le),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[43,1,2]]]);
//# sourceMappingURL=main.6927d78f.chunk.js.map
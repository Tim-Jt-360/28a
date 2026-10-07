(function(){
let translateObjs = {};
const trans = (...a) => {
    return translateObjs[a[0x0]] = a, '';
};
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.')['map'](function (r) {
                        return r['trim']();
                    }), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a], a['split']('.')[0x0]);
        let l = a['split']('.'), m = l[0x0] + '_vr';
        m in this && k['updateText'](k['translateObjs'][a], m);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this, !![]), e['call'](this);
                };
            m['bind']('begin', n, this, !![]);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"layout":"absolute","xrPanelsEnabled":true,"scripts":{"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"initQuiz":TDV.Tour.Script.initQuiz,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"isComponentVisible":TDV.Tour.Script.isComponentVisible,"unregisterKey":TDV.Tour.Script.unregisterKey,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"clone":TDV.Tour.Script.clone,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"downloadFile":TDV.Tour.Script.downloadFile,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"executeJS":TDV.Tour.Script.executeJS,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getOverlays":TDV.Tour.Script.getOverlays,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getMainViewer":TDV.Tour.Script.getMainViewer,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"showPopupImage":TDV.Tour.Script.showPopupImage,"showWindow":TDV.Tour.Script.showWindow,"mixObject":TDV.Tour.Script.mixObject,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"quizFinish":TDV.Tour.Script.quizFinish,"toggleVR":TDV.Tour.Script.toggleVR,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"existsKey":TDV.Tour.Script.existsKey,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"textToSpeech":TDV.Tour.Script.textToSpeech,"getPixels":TDV.Tour.Script.getPixels,"openLink":TDV.Tour.Script.openLink,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"isPanorama":TDV.Tour.Script.isPanorama,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"startMeasurement":TDV.Tour.Script.startMeasurement,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"showWindowBase":TDV.Tour.Script.showWindowBase,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"enableVR":TDV.Tour.Script.enableVR,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"resumePlayers":TDV.Tour.Script.resumePlayers,"init":TDV.Tour.Script.init,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"registerKey":TDV.Tour.Script.registerKey,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"createTween":TDV.Tour.Script.createTween,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"quizStart":TDV.Tour.Script.quizStart,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getMediaByName":TDV.Tour.Script.getMediaByName,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setMapLocation":TDV.Tour.Script.setMapLocation,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"historyGoBack":TDV.Tour.Script.historyGoBack,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"shareSocial":TDV.Tour.Script.shareSocial,"unloadViewer":TDV.Tour.Script.unloadViewer,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"cloneBindings":TDV.Tour.Script.cloneBindings,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"historyGoForward":TDV.Tour.Script.historyGoForward,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"playAudioList":TDV.Tour.Script.playAudioList,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"disableVR":TDV.Tour.Script.disableVR,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"translate":TDV.Tour.Script.translate,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"setValue":TDV.Tour.Script.setValue,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"initAnalytics":TDV.Tour.Script.initAnalytics,"getComponentByName":TDV.Tour.Script.getComponentByName,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"setLocale":TDV.Tour.Script.setLocale,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"quizShowScore":TDV.Tour.Script.quizShowScore,"getKey":TDV.Tour.Script.getKey},"id":"rootPlayer","class":"Player","backgroundColor":["#FFFFFF"],"minHeight":0,"data":{"defaultLocale":"es","displayTooltipInTouchScreens":true,"history":{},"name":"Player7089","textToSpeechConfig":{"pitch":1,"stopBackgroundAudio":false,"speechOnTooltip":false,"volume":1,"speechOnInfoWindow":false,"rate":1,"speechOnQuizQuestion":false},"locales":{"es":"locale/es.txt"}},"minWidth":0,"watermark":false,"propagateClick":false,"backgroundColorRatios":[0],"scrollBarMargin":2,"start":"this.init()","width":"100%","scrollBarColor":"#000000","defaultMenu":["fullscreen","mute","rotation"],"gap":10,"height":"100%","children":["this.MainViewer"],"hash": "0dba3e37b422df0c8ac4c90e268607267072390299737531d93117463944816d", "definitions": [{"thumbnailUrl":"media/panorama_06B0F178_15C7_E45B_41A4_33607FC5E00F_t.webp","data":{"label":"Sch\u00fcepwis 28a"},"vfov":180,"hfov":360,"class":"Panorama","label":trans('panorama_06B0F178_15C7_E45B_41A4_33607FC5E00F.label'),"id":"panorama_06B0F178_15C7_E45B_41A4_33607FC5E00F","frames":[{"class":"CubicPanoramaFrame","cube":{"levels":[{"tags":"ondemand","url":"media/panorama_06B0F178_15C7_E45B_41A4_33607FC5E00F_0/{face}/0/{row}_{column}.webp","width":24576,"height":4096,"colCount":48,"class":"TiledImageResourceLevel","rowCount":8},{"tags":"ondemand","url":"media/panorama_06B0F178_15C7_E45B_41A4_33607FC5E00F_0/{face}/1/{row}_{column}.webp","width":12288,"height":2048,"colCount":24,"class":"TiledImageResourceLevel","rowCount":4},{"tags":"ondemand","url":"media/panorama_06B0F178_15C7_E45B_41A4_33607FC5E00F_0/{face}/2/{row}_{column}.webp","width":6144,"height":1024,"colCount":12,"class":"TiledImageResourceLevel","rowCount":2},{"tags":["ondemand","preload"],"url":"media/panorama_06B0F178_15C7_E45B_41A4_33607FC5E00F_0/{face}/3/{row}_{column}.webp","width":3072,"height":512,"colCount":6,"class":"TiledImageResourceLevel","rowCount":1}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_06B0F178_15C7_E45B_41A4_33607FC5E00F_t.webp"}],"hfovMax":130},{"id":"MainViewerPanoramaPlayer","class":"PanoramaPlayer","keepModel3DLoadedWithoutLocation":true,"mouseControlMode":"drag_rotation","aaEnabled":true,"viewerArea":"this.MainViewer","touchControlMode":"drag_rotation","displayPlaybackBar":true,"arrowKeysAction":"translate"},{"initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"initialSequence":"this.sequence_048BAB5E_15C7_E457_41AE_AEC68C76065A","id":"panorama_06B0F178_15C7_E45B_41A4_33607FC5E00F_camera","enterPointingToHorizon":true,"class":"PanoramaCamera"},{"progressBorderRadius":2,"subtitlesTextShadowVerticalLength":1,"toolTipFontColor":"#606060","playbackBarHeadShadowHorizontalLength":0,"subtitlesTextShadowHorizontalLength":1,"toolTipBackgroundColor":"#F6F6F6","playbackBarHeadShadowOpacity":0.7,"playbackBarBorderRadius":0,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","subtitlesGap":0,"playbackBarProgressBorderColor":"#000000","playbackBarHeadBorderRadius":0,"data":{"name":"Main Viewer"},"subtitlesBackgroundColor":"#000000","playbackBarHeadBorderColor":"#000000","playbackBarBorderSize":0,"progressBackgroundColorRatios":[0],"subtitlesTextShadowOpacity":1,"toolTipPaddingLeft":6,"progressOpacity":0.7,"progressRight":"33%","progressBarBackgroundColorDirection":"horizontal","toolTipPaddingBottom":4,"surfaceReticleColor":"#FFFFFF","subtitlesFontColor":"#FFFFFF","subtitlesTop":0,"playbackBarBackgroundOpacity":1,"subtitlesTextShadowColor":"#000000","playbackBarHeadShadowBlurRadius":3,"vrThumbstickRotationStep":20,"progressBarBorderColor":"#000000","progressBarBackgroundColorRatios":[0],"playbackBarLeft":0,"subtitlesFontSize":"3vmin","toolTipPaddingRight":6,"playbackBarHeadHeight":15,"vrPointerColor":"#FFFFFF","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadowColor":"#000000","playbackBarHeadShadowVerticalLength":0,"playbackBarHeadBorderSize":0,"id":"MainViewer","class":"ViewerArea","surfaceReticleSelectionColor":"#FFFFFF","progressBorderColor":"#000000","vrPointerSelectionColor":"#FF6600","subtitlesBackgroundOpacity":0.2,"minHeight":50,"playbackBarHeadShadow":true,"minWidth":100,"progressBarBackgroundColor":["#3399FF"],"subtitlesBorderColor":"#FFFFFF","toolTipPaddingTop":4,"progressBackgroundColor":["#000000"],"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBottom":10,"firstTransitionDuration":0,"propagateClick":false,"toolTipShadowColor":"#333138","playbackBarBottom":5,"progressHeight":2,"toolTipFontFamily":"Arial","progressBorderSize":0,"vrPointerSelectionTime":2000,"progressBarBorderSize":0,"progressBarBorderRadius":2,"playbackBarHeight":10,"playbackBarHeadWidth":6,"playbackBarBackgroundColor":["#FFFFFF"],"toolTipTextShadowColor":"#000000","toolTipBorderColor":"#767676","width":"100%","playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderSize":0,"toolTipFontSize":"1.11vmin","playbackBarRight":0,"playbackBarProgressBorderRadius":0,"height":"100%","playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesBottom":50,"subtitlesFontFamily":"Arial","progressLeft":"33%"},{"id":"mainPlayList","items":[{"camera":"this.panorama_06B0F178_15C7_E45B_41A4_33607FC5E00F_camera","media":"this.panorama_06B0F178_15C7_E45B_41A4_33607FC5E00F","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem"}],"class":"PlayList"},{"movements":[{"yawDelta":18.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96}],"id":"sequence_048BAB5E_15C7_E457_41AE_AEC68C76065A","class":"PanoramaCameraSequence"}]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    let a = {}, b = this['get']('data')['translateObjs'];
    for (const c in translateObjs) {
        if (!b['hasOwnProperty'](c))
            b[c] = translateObjs[c];
    }
    return a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2026.1.2, Wed Oct 7 2026
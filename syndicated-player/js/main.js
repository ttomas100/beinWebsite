(function ($) {
    $(document).ready(function () {
        ChangeIframeLeague();
    });

    function ChangeIframeLeague() {
        // document.QuerySelector('.iframe-header-leagues-switcher .league-item selected');
        let leagueItem = $('.league-item');
        console.log(leagueItem);

        leagueItem.on('click', function (e) {
            e.preventDefault();
            // console.log('click');
            leagueItem.removeClass('selected');
            $(this).addClass('selected');
            let iframe = $('.iframe-container iframe');
            let iframeSrc = iframe.attr('src');
            let leagueTitle = this.getAttribute('data-league-name');
            let leagueId = this.getAttribute('data-players-id');
       
            // trackLeagueView(leagueTitle);
            //update iframe title
            iframe.attr('title', leagueTitle);
            //parse iframe src and create a new url
            let updatedIFrameSrc = updateUrl(iframeSrc, leagueId, '.html');
            //update iframe src url
            iframe.attr('src', updatedIFrameSrc);
        });

        function updateUrl(url, newTabId, fileType) {
            let newUrl = new URL(url);
            let urlOrigin = newUrl.origin;
            return urlOrigin + '/players/' + newTabId + fileType;
        }

        // function trackLeagueView(leagueTitle) {
        //      gtag('event', 'Click', {
        //             'event_category': 'League Tab',
        //             'event_label': leagueTitle,
        //             'value': ''
        //         });
        // }
    }
})(jQuery);
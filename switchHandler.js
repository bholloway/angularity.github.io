//var COOKIE_KEY_VISIBLE_SECTION = "visibleSection";

$.md.stage('all_ready').subscribe(function (done) {

/*
    // Commented Out code is the Radio Button Implementation.

    $("form input:radio").change(
        function(){
            $.cookie(COOKIE_KEY_VISIBLE_SECTION, getCheckedValue());
            hideSection(getNotCheckedValue());
        }
    );

    var cookieValueVisibleSection = $.cookie(COOKIE_KEY_VISIBLE_SECTION);

    if(cookieValueVisibleSection != undefined && cookieValueVisibleSection!=getCheckedValue())
    {
        $(":radio[value="+cookieValueVisibleSection+"]").prop("checked", true)
    }

    //hideSection(getNotCheckedValue());
*/
    hideSection(getLanguage());

    done();
});


/*
// Commented Out code is the Radio Button Implementation.

function getCheckedValue()
{
    return $('input:radio[name=visibilitySections]:checked').val();
}

function getNotCheckedValue()
{
    return $('input:radio[name=visibilitySections]:not(:checked)').val();
}
*/

function getLanguage()
{
    var language = window.location.hash.split('#')[2];

    return (language) ? language.toLowerCase() : null;

}

function hideSection(sectionName) {
    if (sectionName)
    {
        var children = $('#md-content').children();
        var hide = false;
        jQuery.each(children,function(child){

            var className = children[child].className;

            if(className.search(/-start/i) != -1 || className.search(/-stop/i) != -1)
            {
                if((className != sectionName+'-start') && (className != sectionName+'-stop'))
                {
                    hide = !hide;
                }
            }

            // Commented Out code is the Radio Button Implementation.
            //hide = ((children[child].className == sectionName+'-start') || (children[child].className == sectionName+'-stop')) ? !hide : hide;

            if(hide)
            {
                //$(children[child]).display
                $(children[child]).hide();
            }
            else
            {
                $(children[child]).show();
            }

        });
    }



}


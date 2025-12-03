$(document).ready(function () {

    /* AUTOMATIC TAB ACTIVATION */

    const $tabs = $('[role="tab"]').not('#tablist_manual [role="tab"]');
    const $panels = $('[role="tabpanel"]').not('#tablist_manual [role="tabpanel"]');

    function activateAutoTab(index) {
        $tabs.each(function (i) {
            const $tab = $(this);
            const panelId = $tab.attr("aria-controls");
            const $panel = $("#" + panelId);

            if (i === index) {
                $tab.attr({
                    "aria-selected": "true",
                    "tabindex": "0"
                }).focus();
                $panel.removeAttr("hidden");
            } else {
                $tab.attr({
                    "aria-selected": "false",
                    "tabindex": "-1"
                });
                $panel.attr("hidden", true);
            }
        });
    }

    $tabs.each(function (index) {
        const $tab = $(this);

        $tab.on("click", function () {
            activateAutoTab(index);
        });

        $tab.on("keydown", function (e) {
            const key = e.key;
            let newIndex = index;

            if (key === "ArrowRight") newIndex = (index + 1) % $tabs.length;
            if (key === "ArrowLeft") newIndex = (index - 1 + $tabs.length) % $tabs.length;
            if (key === "Home") newIndex = 0;
            if (key === "End") newIndex = $tabs.length - 1;
            if (key === " " || key === "Enter") newIndex = index;

            activateAutoTab(newIndex);
        });
    });



    /* MANUAL TAB ACTIVATION */

    const $Manualtabs = $('#tablist_manual').find('[role="tab"]');

    function activateManualTab(index) {
        $Manualtabs.each(function (i) {
            const $Manualtab = $(this);
            const panelId = $Manualtab.attr("aria-controls");
            const $panel = $("#" + panelId);

            if (i === index) {
                $Manualtab.attr({
                    "aria-selected": "true",
                    "tabindex": "0"
                }).focus();
                $panel.removeAttr("hidden");
            } else {
                $Manualtab.attr({
                    "aria-selected": "false",
                    "tabindex": "-1"
                });
                $panel.attr("hidden", true);
            }
        });
    }

    $Manualtabs.each(function (index) {
        const $Manualtab = $(this);

        $Manualtab.on("click", function () {
            activateManualTab(index);
        });

        $Manualtab.on("keydown", function (e) {
            const key = e.key;
            let newIndex = index;

            if (key === "ArrowRight") newIndex = (index + 1) % $Manualtabs.length;
            if (key === "ArrowLeft") newIndex = (index - 1 + $Manualtabs.length) % $Manualtabs.length;
            if (key === "Home") newIndex = 0;
            if (key === "End") newIndex = $Manualtabs.length - 1;

            $Manualtabs.eq(newIndex).focus();
        });
    });
});

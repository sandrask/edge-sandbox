/*
Copyright SecureKey Technologies Inc. All Rights Reserved.

SPDX-License-Identifier: Apache-2.0
 */

$(document).ready(function () {

    $('#profile').on('change', function () {
        if ($(this).val() != "") {
            $('#vcsProfile').val($(this).val());
        } else {
            $('#vcsProfile').val('');
        }
    });

    $('#studentCard').on('click', function() {
        if (!$(this).data('clicked')) {
            $('#scope').val("StudentCard");
            $(this).data('clicked', true);
        }
    });

    $('#prCard').on('click', function() {
        if (!$(this).data('clicked')) {
            $('#scope').val("PermanentResidentCard");
            $(this).data('clicked', true);
        }
    });

    $('#travelCard').on('click', function() {
        if (!$(this).data('clicked')) {
            $('#scope').val("TravelCard");
            $(this).data('clicked', true);
        }
    });

    $('#cpr').on('click', function() {
        if (!$(this).data('clicked')) {
            $('#scope').val("CrudeProductCredential");
            $(this).data('clicked', true);
        }
    });

    $('#universityDegree').on('click', function() {
        if (!$(this).data('clicked')) {
            $('#scope').val("UniversityDegreeCredential");
            $(this).data('clicked', true);
        }
    });

    $('#cmtr').on('click', function() {
        if (!$(this).data('clicked')) {
            $('#scope').val("CertifiedMillTestReport");
            $(this).data('clicked', true);
        }
    });

    $('#revokeVCBtn').on('click', function() {
        if (!$(this).data('clicked')) {
            $(this).data('clicked', true);
        }
    });

    $('#demoSetupForm').submit(function () {

        if($('#studentCard').data('clicked'))
        {
            $('#demoSetupForm').attr('action', '/login?');

        } else if ($("#travelCard").data('clicked'))  {

            $('#demoSetupForm').attr('action', '/login?');

        } else if ($("#universityDegree").data('clicked')) {

            $('#demoSetupForm').attr('action', '/login?');

        } else if ($("#cmtr").data('clicked')) {

            $('#demoSetupForm').attr('action', '/login?');

        } else if ($("#cpr").data('clicked')) {

            $('#demoSetupForm').attr('action', '/login?');

        } else if ($("#travelCard").data('clicked')) {

            $('#demoSetupForm').attr('action', '/login?');

        }  else if ($("#prCard").data('clicked')) {

            $('#demoSetupForm').attr('action', '/login?');

        } else if ($("#revokeVCBtn").data('clicked')) {

            $('#demoSetupForm').attr('action', 'view/revoke.html');

        } else {

            $('#message').text("Profile is not selected").show().fadeOut(2000);
        }
    });
});


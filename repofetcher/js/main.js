$(document).ready(function() {

    var selected = "green";

    $("#btn_green").click(function() {
        selected = "green";
        $("#repos .btn").attr('class', 'btn btn-success');
        $("strong").css('color', '#00bc8c');
    });

    $("#btn_blue").click(function() {
        selected = "blue";
        $("#repos .btn").attr('class', 'btn btn-info');
        $("strong").css('color', '#3498DB');
    });

    $("#btn_yellow").click(function() {
        selected = "yellow";
        $("#repos .btn").attr('class', 'btn btn-warning');
        $("strong").css('color', '#F39C12');
    });

    $("#btn_red").click(function() {
        selected = "red";
        $("#repos .btn").attr('class', 'btn btn-danger');
        $("strong").css('color', '#E74C3C');
    });

    $('#searchRepositories').keypress(function(e) {

        //save username on keypress 
        var username = e.target.value;

         $('#content').html(`
            <h3 class="page-header">Latest Repos</h3>
            <div id="repos"></div>
          `);

        // Make request to Github 
        $.ajax({
            url: 'https://api.github.com/users/' + username,
            data: {
                client_id: '61f4b2b5a77106f84e52',
                client_secret: '2c7b0b1e18490026b6e6973cd5cdbdc7de7aacc3'
            }
        }).done(function(user) {
            $.ajax({
                url: 'https://api.github.com/users/' + username + '/repos',
                data: {
                    client_id: '61f4b2b5a77106f84e52',
                    client_secret: '2c7b0b1e18490026b6e6973cd5cdbdc7de7aacc3',
                    per_page: 7
                }
            }).done(function(repos) {
                $.each(repos, function(index, repo) {
                    if (selected == "green") {
                        $('#repos').append(`
                          <div class="well">
                            <div class="row">
                              <div class="col-md-7">
                                <strong style="color: #00bc8c;">${repo.name}</strong>: ${repo.description}
                              </div>
                              <div class="col-md-3">
                              </div>
                              <div class="col-md-2">
                                <a href="${repo.html_url}" target="_blank" id="btn_repo" class="btn btn-success">Repo Page</a>
                              </div>
                            </div>
                          </div>
                        `);
                    }

                    if (selected == "blue") {
                        $('#repos').append(`
                          <div class="well">
                            <div class="row">
                              <div class="col-md-7">
                                <strong style="color: #3498DB;">${repo.name}</strong>: ${repo.description}
                              </div>
                              <div class="col-md-3">
                              </div>
                              <div class="col-md-2">
                                <a href="${repo.html_url}" target="_blank" id="btn_repo" class="btn btn-info">Repo Page</a>
                              </div>
                            </div>
                          </div>
                        `);
                    }
                    if (selected == "yellow"){
                        $('#repos').append(`
                          <div class="well">
                            <div class="row">
                              <div class="col-md-7">
                                <strong style="color: #F39C12;">${repo.name}</strong>: ${repo.description}
                              </div>
                              <div class="col-md-3">
                              </div>
                              <div class="col-md-2">
                                <a href="${repo.html_url}" target="_blank" id="btn_repo" class="btn btn-warning">Repo Page</a>
                              </div>
                            </div>
                          </div>
                        `);
                    }
                    if (selected == "red") {
                        $('#repos').append(`
                          <div class="well">
                            <div class="row">
                              <div class="col-md-7">
                                <strong style="color: #E74C3C;">${repo.name}</strong>: ${repo.description}
                              </div>
                              <div class="col-md-3">
                               
                              </div>
                              <div class="col-md-2">
                                <a href="${repo.html_url}" target="_blank" id="btn_repo" class="btn btn-danger">Repo Page</a>
                              </div>
                            </div>
                          </div>
                        `);
                    }

                });
            });

           //
        });
    });
});
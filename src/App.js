import './App.css'
import {Component} from 'react'
const App = () => {
  
  <div class="">
    <header class="navbar-fixed-top">
      <div class="row">
        <div class="container-fluid">
          <div class="pull-left">
            <div class="pull-left logo text-center">
              <span>LOGO</span>
            </div><button class="btn btn-primary menu"><span class=
            "glyphicon glyphicon glyphicon-menu-hamburger"></span></button>
          </div>
          <div class="pull-right">
            <div class="marr20">
              <ul class="nav navbar-top-links navbar-right">
                <li class="dropdown task">
                  <a class="dropdown-toggle" data-toggle="dropdown" href="#"><i class="fa fa-tasks fa-fw"></i>
                  <i class="fa fa-caret-down"></i></a>
                  <ul class="dropdown-menu dropdown-tasks">
                    <li>
                      <a href="#">
                      <div>
                        <p><strong>Task 1</strong> <span class="pull-right text-muted">40% Complete</span></p>
                        <div class="progress progress-striped active">
                          <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="40" class=
                          "progress-bar progress-bar-success" role="progressbar" style="width: 40%">
                            <span class="sr-only">40% Complete (success)</span>
                          </div>
                        </div>
                      </div></a>
                    </li>
                    <li class="divider"></li>
                    <li>
                      <a href="#">
                      <div>
                        <p><strong>Task 2</strong> <span class="pull-right text-muted">20% Complete</span></p>
                        <div class="progress progress-striped active">
                          <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="20" class=
                          "progress-bar progress-bar-info" role="progressbar" style="width: 20%">
                            <span class="sr-only">20% Complete</span>
                          </div>
                        </div>
                      </div></a>
                    </li>
                    <li class="divider"></li>
                    <li>
                      <a href="#">
                      <div>
                        <p><strong>Task 3</strong> <span class="pull-right text-muted">60% Complete</span></p>
                        <div class="progress progress-striped active">
                          <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="60" class=
                          "progress-bar progress-bar-warning" role="progressbar" style="width: 60%">
                            <span class="sr-only">60% Complete (warning)</span>
                          </div>
                        </div>
                      </div></a>
                    </li>
                    <li class="divider"></li>
                    <li>
                      <a href="#">
                      <div>
                        <p><strong>Task 4</strong> <span class="pull-right text-muted">80% Complete</span></p>
                        <div class="progress progress-striped active">
                          <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="80" class=
                          "progress-bar progress-bar-danger" role="progressbar" style="width: 80%">
                            <span class="sr-only">80% Complete (danger)</span>
                          </div>
                        </div>
                      </div></a>
                    </li>
                    <li class="divider"></li>
                    <li>
                      <a class="text-center" href="#"><strong>See All Tasks</strong> <i class=
                      "fa fa-angle-right"></i></a>
                    </li>
                  </ul><!-- /.dropdown-tasks -->
                </li><!-- /.dropdown -->
                <li class="dropdown bell">
                  <a aria-expanded="false" class="dropdown-toggle" data-toggle="dropdown" href="#"><i class=
                  "fa fa-bell fa-fw"></i> <i class="fa fa-caret-down"></i></a>
                  <ul class="dropdown-menu dropdown-alerts">
                    <li>
                      <a href="#">
                      <div>
                        <i class="fa fa-comment fa-fw"></i> New Comment <span class="pull-right text-muted small">4
                        minutes ago</span>
                      </div></a>
                    </li>
                    <li class="divider"></li>
                    <li>
                      <a href="#">
                      <div>
                        <i class="fa fa-twitter fa-fw"></i> 3 New Followers <span class=
                        "pull-right text-muted small">12 minutes ago</span>
                      </div></a>
                    </li>
                    <li class="divider"></li>
                    <li>
                      <a href="#">
                      <div>
                        <i class="fa fa-envelope fa-fw"></i> Message Sent <span class="pull-right text-muted small">4
                        minutes ago</span>
                      </div></a>
                    </li>
                    <li class="divider"></li>
                    <li>
                      <a href="#">
                      <div>
                        <i class="fa fa-tasks fa-fw"></i> New Task <span class="pull-right text-muted small">4 minutes
                        ago</span>
                      </div></a>
                    </li>
                    <li class="divider"></li>
                    <li>
                      <a href="#">
                      <div>
                        <i class="fa fa-upload fa-fw"></i> Server Rebooted <span class="pull-right text-muted small">4
                        minutes ago</span>
                      </div></a>
                    </li>
                    <li class="divider"></li>
                    <li>
                      <a class="text-center" href="#"><strong>See All Alerts</strong> <i class=
                      "fa fa-angle-right"></i></a>
                    </li>
                  </ul><!-- /.dropdown-alerts -->
                </li><!-- /.dropdown -->
                <li class="dropdown user">
                  <a aria-expanded="false" class="dropdown-toggle" data-toggle="dropdown" href="#"><i class=
                  "fa fa-user fa-fw"></i> <i class="fa fa-caret-down"></i></a>
                  <ul class="dropdown-menu dropdown-user">
                    <li>
                      <a href="#"><i class="fa fa-user fa-fw"></i> User Profile</a>
                    </li>
                    <li>
                      <a href="#"><i class="fa fa-gear fa-fw"></i> Settings</a>
                    </li>
                    <li class="divider"></li>
                    <li>
                      <a href="login.html"><i class="fa fa-sign-out fa-fw"></i> Logout</a>
                    </li>
                  </ul><!-- /.dropdown-user -->
                </li><!-- /.dropdown -->
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="wrap">
      <div class="side-menu">
        <nav class="navbar navbar-default" role="navigation">
          <div class="navbar-header">
            <div class="brand-wrapper">
              <div class="brand-name-wrapper">
                <a class="navbar-brand" href="#">Navigation Menu</a>
              </div><a class="btn btn-default" data-toggle="collapse" href="#search" id="search-trigger"><span class=
              "glyphicon glyphicon-search"></span></a>
              <div class="panel-collapse collapse" id="search">
                <div class="panel-body">
                  <form class="navbar-form" role="search">
                    <div class="form-group">
                      <input class="form-control" placeholder="Search" type="text">
                    </div><button class="btn btn-default" type="submit"><span class=
                    "glyphicon glyphicon-ok"></span></button>
                  </form>
                </div>
              </div>
            </div>
          </div><!-- Main Menu -->
          <div class="side-menu-container">
            <ul class="nav navbar-nav">
              <li>
                <a href="#"><span class="glyphicon glyphicon-send"></span> Dashboard</a>
              </li>
              <li class="active">
                <a href="#"><span class="glyphicon glyphicon-plane"></span> Active Link</a>
              </li>
              <li>
                <a href="#"><span class="glyphicon glyphicon-cloud"></span> Icon Description</a>
              </li><!-- Dropdown-->
              <li class="panel panel-default" id="dropdown">
                <a data-toggle="collapse" href="#dropdown-lvl1"><span class="glyphicon glyphicon-user"></span> Sub
                Level <span class="caret"></span></a> <!-- Dropdown level 1 -->
                <div class="panel-collapse collapse" id="dropdown-lvl1">
                  <div class="panel-body">
                    <ul class="nav navbar-nav">
                      <li>
                        <a href="#">Link</a>
                      </li>
                      <li>
                        <a href="#">Link</a>
                      </li>
                      <li>
                        <a href="#">Link</a>
                      </li><!-- Dropdown level 2 -->
                      <li class="panel panel-default" id="dropdown">
                        <a data-toggle="collapse" href="#dropdown-lvl2"><span class="glyphicon glyphicon-off"></span>
                        Sub Level <span class="caret"></span></a>
                        <div class="panel-collapse collapse" id="dropdown-lvl2">
                          <div class="panel-body">
                            <ul class="nav navbar-nav">
                              <li>
                                <a href="#">Link</a>
                              </li>
                              <li>
                                <a href="#">Link</a>
                              </li>
                              <li>
                                <a href="#">Link</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <a href="#"><span class="glyphicon glyphicon-signal"></span> Link</a>
              </li>
            </ul>
          </div><!-- /.navbar-collapse -->
        </nav>
      </div><!-- Main Content -->
      <div class="container-fluid">
        <div class="side-body">
          <div class="page-title-box">
            <h3 class="page-title pull-left">Dashboard</h3>
            <ol class="breadcrumb pull-right">
              <li>
                <a href="#">home</a>
              </li>
              <li class="active">Dashboard</li>
            </ol>
            <div class="clearfix"></div>
          </div>
          <div class="row">
            <div class="col-lg-8 col-sm-12">
              <div class="row">
                <div class="col-sm-6">
                  <div class="panel panel-primary">
                    <div class="panel-heading">
                      <div class="row">
                        <div class="col-xs-9">
                          <div class="huge">
                            09
                          </div>
                          <div>
                            New Clients!
                          </div>
                        </div>
                        <div class="col-xs-3 text-right">
                          <i class="fa fa-cogs fa-5x"></i>
                        </div>
                      </div>
                    </div><a href="#">
                    <div class="panel-footer">
                      <span class="pull-left">View Details</span> <span class="pull-right"><i class=
                      "fa fa-arrow-circle-right"></i></span>
                      <div class="clearfix"></div>
                    </div></a>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="panel panel-green">
                    <div class="panel-heading">
                      <div class="row">
                        <div class="col-xs-9">
                          <div class="huge">
                            612
                          </div>
                          <div>
                            New Deals!
                          </div>
                        </div>
                        <div class="col-xs-3 text-right">
                          <i class="fa fa-laptop fa-5x"></i>
                        </div>
                      </div>
                    </div><a href="#">
                    <div class="panel-footer">
                      <span class="pull-left">View Details</span> <span class="pull-right"><i class=
                      "fa fa-arrow-circle-right"></i></span>
                      <div class="clearfix"></div>
                    </div></a>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="panel panel-yellow">
                    <div class="panel-heading">
                      <div class="row">
                        <div class="col-xs-9">
                          <div class="huge">
                            2148
                          </div>
                          <div>
                            Total Sales!
                          </div>
                        </div>
                        <div class="col-xs-3 text-right">
                          <i class="fa fa-shopping-cart fa-5x"></i>
                        </div>
                      </div>
                    </div><a href="#">
                    <div class="panel-footer">
                      <span class="pull-left">View Details</span> <span class="pull-right"><i class=
                      "fa fa-arrow-circle-right"></i></span>
                      <div class="clearfix"></div>
                    </div></a>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="panel panel-red">
                    <div class="panel-heading">
                      <div class="row">
                        <div class="col-xs-9">
                          <div class="huge">
                            $56M
                          </div>
                          <div>
                            Total Income!
                          </div>
                        </div>
                        <div class="col-xs-3 text-right">
                          <i class="fa fa-dollar fa-5x"></i>
                        </div>
                      </div>
                    </div><a href="#">
                    <div class="panel-footer">
                      <span class="pull-left">View Details</span> <span class="pull-right"><i class=
                      "fa fa-arrow-circle-right"></i></span>
                      <div class="clearfix"></div>
                    </div></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-12">
              <div class="panel panel-info">
                <div class="panel-heading">
                  <i class="fa fa-bell fa-fw"></i> Notifications Panel
                </div>
                <div class="panel-body">
                  <div class="list-group">
                    <a class="list-group-item" href="#"><i class="fa fa-comment fa-fw"></i> New Comment <span class=
                    "pull-right text-muted small"><em>14 minutes ago</em></span></a> <a class="list-group-item" href=
                    "#"><i class="fa fa-tasks fa-fw"></i> New Task <span class="pull-right text-muted small"><em>55
                    minutes ago</em></span></a> <a class="list-group-item" href="#"><i class="fa fa-upload fa-fw"></i>
                    Server Rebooted <span class="pull-right text-muted small"><em>55 minutes ago</em></span></a>
                    <a class="list-group-item" href="#"><i class="fa fa-bolt fa-fw"></i> Server Crashed! <span class=
                    "pull-right text-muted small"><em>3:33 PM</em></span></a> <a class="list-group-item" href=
                    "#"><i class="fa fa-warning fa-fw"></i> Server Not Responding <span class=
                    "pull-right text-muted small"><em>10:57 AM</em></span></a>
                  </div><a class="btn btn-info btn-block" href="#">View All Alerts</a>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-8">
              <div class="panel panel-info">
                <div class="panel-heading">
                  <i class="fa fa-line-chart fa-fw"></i> Browser Usage (5 Years)
                </div>
                <p class="padd20">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div id="line-chart" style="height:250px;"></div>
              </div>
            </div> 
            <div class="col-sm-4">
              <div class="panel panel-success">
                <div class="panel-heading">
                  <i class="fa fa-pie-chart fa-fw"></i> Project Task Details
                </div>
                <p class="padd20">Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div id="donut-chart" style="height:250px"></div>
              </div>
            </div>            
          </div>

          <div class="row">
            <div class="col-sm-6">
              <div class="panel panel-warning">
                <div class="panel-heading">
                  <i class="fa fa-bar-chart fa-fw"></i> Browser Usage Details
                </div>
                <div id="bar-chart" style="height:200px"></div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="panel panel-success">
                <div class="panel-heading">
                  <i class="fa fa-table fa-fw"></i> Table Details
                </div>
                <div class="table-responsive">
                  <table class="table table-striped" id="example">
                    <tr>
                      <th>Heading 1</th>
                      <th>Heading 2</th>
                      <th>Heading 3</th>
                      <th>Heading 4</th>
                      <th>Heading 5</th>
                      <th>Heading 6</th>
                    </tr>
                    <tr>
                      <td>Content</td>
                      <td>Content</td>
                      <td>Content</td>
                      <td>Content</td>
                      <td>Content</td>
                      <td>Content</td>
                    </tr>
                    <tr>
                      <td>Content</td>
                      <td>Content</td>
                      <td>Content</td>
                      <td>content</td>
                      <td>content</td>
                      <td>content</td>
                    </tr>
                    <tr>
                      <td>Content</td>
                      <td>Content</td>
                      <td>Content</td>
                      <td>content</td>
                      <td>content</td>
                      <td>content</td>
                    </tr>
                    <tr>
                      <td>Content</td>
                      <td>Content</td>
                      <td>Content</td>
                      <td>content</td>
                      <td>content</td>
                      <td>content</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="side-footer">
          <div class="footer text-center">
            Designed By <a target="_blank" href="https://www.linkedin.com/in/peeyush200/"> Peeyush </a>
          </div>
        </div>
      </div>
    </div>
  </div>


}
export default App;
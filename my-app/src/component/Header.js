import { Link } from "react-router-dom";

function Header(){
    return(
        <header id="header">
		
		
		<div class="header-middle">
			<div class="container">
				<div class="row">
					<div class="col-sm-4">
						<div class="logo pull-left">
							<a href="index.html"><img src="images/home/logo.png" alt="" /></a>
						</div>
						
					</div>
					<div class="col-sm-8">
						<div class="shop-menu pull-right">
							<ul class="nav navbar-nav">
								
								{/* <li><Link to="/"><i class="fa fa-crosshairs"></i> Home Page</Link></li> */}
								<li><Link to="/home"><i class="fa fa-crosshairs"></i>Home Page</Link></li>

								<li><Link to="/register"><i class="fa fa-shopping-cart"></i> Register page</Link></li>
								<li><Link to="/login"><i class="fa fa-lock"></i> Login Page</Link></li>
								
								<li><Link to="/profile"><i class="fa fa-lock"></i>profile Page</Link></li>


								
								
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	
	
	</header>
	
    )
}

export default Header;
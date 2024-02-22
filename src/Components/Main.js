import React from "react";
import "./Main.css";

export default function Main() {
	return (
		<div className="main-card">
			<h2>Our Menu</h2>
			<div className="row">
				<div className="card">
					<img
						src="https://images.pexels.com/photos/372851/pexels-photo-372851.jpeg?auto=compress&cs=tinysrgb&w=400"
						alt=""
					/>
					<p className="heading">Sourdough Bread:</p>
					<p> classic bread made through the natural fermentation of dough</p>
					<p>R24.99</p>
				</div>
				<div className="card">
					<img
						src="https://images.pexels.com/photos/1397292/pexels-photo-1397292.jpeg?auto=compress&cs=tinysrgb&w=400"
						alt=""
					/>
					<p className="heading">Baguette</p>
					<p>A long, thin loaf of French bread with a crisp crust and soft interior.</p>
					<p>R20.99</p>
				</div>
				<div className="card">
					<img
						src="https://images.pexels.com/photos/965741/pexels-photo-965741.jpeg?auto=compress&cs=tinysrgb&w=400"
						alt=""
					/>
					<p className="heading">Ciabatta</p>
					<p>Italian white bread made from wheat flour, water, salt, and yeast</p>
					<p>R30.99</p>
				</div>
				<div className="card">
					<img
						src="https://images.pexels.com/photos/2245293/pexels-photo-2245293.jpeg?auto=compress&cs=tinysrgb&w=400  "
						alt=""
					/>
					<p className="heading">Whole Wheat Bread</p>
					<p>Bread made from flour that contains all parts of the wheat grain</p>
					<p>R12.99</p>
				</div>
			</div>
			
			<div className="row">
				<div className="card">
					<img
						src="https://images.pexels.com/photos/972838/pexels-photo-972838.jpeg?auto=compress&cs=tinysrgb&w=400"
						alt=""
					/>
					<p className="heading">Multigrain Bread</p>
					<p>Bread made with a combination of different grains </p>
					<p>R22.98</p>
				</div>
				<div className="card">
					<img
						src="https://images.pexels.com/photos/420308/pexels-photo-420308.jpeg?auto=compress&cs=tinysrgb&w=400"
						alt=""
					/>
					<p className="heading">Pita Bread</p>
					<p>A round, pocketed flatbread common in Middle Eastern cuisine,</p>
					<p>R15.99</p>
				</div>
				<div className="card">
					<img
						src="https://images.pexels.com/photos/267308/pexels-photo-267308.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt=""
					/>
					<p className="heading">Brioche</p>
					<p> French bread enriched with eggs and butter, giving it a soft</p>
					<p>12.99</p>
				</div>
				<div className="card">
					<img
						src="https://images.pexels.com/photos/1586947/pexels-photo-1586947.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt=""
					/>
					<p className="heading">Focaccia:</p>
					<p> Italian flatbread topped with olive oil, herbs</p>
					<p>R18.99</p>
				</div>
			</div>
		</div>
	);
}

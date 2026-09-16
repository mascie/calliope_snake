def tolle_funktion():
    led.plot_bar_graph(input.light_level(), 255)

basic.forever(tolle_funktion)

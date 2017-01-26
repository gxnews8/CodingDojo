from django.shortcuts import render, redirect
from .models import League, Team, Player

from . import team_maker

def index(request):
	context = {
		"leagues": League.objects.all(),
		"teams": Team.objects.all(),
		# "players": Player.objects.all(),

		# Simple finds
		# "leagues": League.objects.all().filter(sport="Baseball"),#1
		# "leagues": League.objects.all().filter(name__contains="Womens"),#2
		# "leagues": League.objects.all().filter(sport__contains="Hockey"),#3
		# "leagues": League.objects.all().filter(sport__icontains="Football"),#4
		# "leagues": League.objects.all().filter(name__contains="Conference"),#5
		# "leagues": League.objects.all().filter(name__contains="Atlantic"),#6

		# "teams": Team.objects.all().filter(location="Dallas"),#7
		# "teams": Team.objects.all().filter(team_name__contains="Raptors"),#8
		# "teams": Team.objects.all().filter(location__contains="City"),#9
		# "teams": Team.objects.all().filter(team_name__startswith="T"),#10
		# "teams": Team.objects.all().order_by("location"),#11
		# "teams": Team.objects.all().order_by("team_name"),#12

		# "players": Player.objects.all().filter(last_name__contains="Cooper"),#13
		# "players": Player.objects.all().filter(first_name__contains="Joshua"),#14
		# "players": Player.objects.all().filter(last_name__contains="Cooper").filter(first_name__icontains="Joshua"),#15
		# "players": Player.objects.all().filter(first_name__contains="Alexander").filter(first_name__contains="Wyatt"),#16

		# ForeignKey Relationships
		# "teams": Team.objects.all().filter(league__name__contains="Atlantic Soccer"),#1. Find all teams in the Atlantic Soccer Conference
		# "players": Player.objects.all().filter(team__team_name__contains="Penguins"),#2. Find all (current) players on the Boston Penguins
		"players": Player.objects.all().filter(league__name__startswith="International"),#3. Find all (current) players in the International Collegiate Baseball Conference
	}
	return render(request, "leagues/index.html", context)

def make_data(request):
	team_maker.gen_leagues(10)
	team_maker.gen_teams(50)
	team_maker.gen_players(200)

	return redirect("index")

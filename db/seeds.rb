require 'date'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
users = User.create([
  { name: "Joni", email: "joni@email.com", password: "password", img_url: "1253_user1299_090713-072140_i1b7hs.jpg" },
  { name: "James", email: "james@email.com", password: "password", img_url: "james-taylor2_htus9b.jpg" },
  { name: "Kanye", email: "kanye@email.com", password: "password", img_url: "45a3532e-a454-4590-be0a-002de1a0c652_tfwhix.jpg"},
  { name: "Beck", email: "beck@email.com", password: "password", img_url: "beck-624-1367411586_oxebxm.jpg" },
  { name: "David", email: "david@email.com", password: "password", img_url: "original_david_bowie_3_600xfree_a2ecjq.jpg" },
  { name: "Matt", email: "matt@email.com", password: "password", img_url: "matt_street_zxlkmk.jpg" },
  { name: "Fez", email: "fez@email.com", password: "password", img_url: "Fez__That__70s_Show_ny5e90.jpg" },
  { name: "Galadriel", email: "galadriel@email.com", password: "password", img_url: "tumblr_m7or4oGxXe1qgfscco1_500_ze6n8z.jpg" },
  { name: "Erykah", email: "erykah@email.com", password: "password", img_url: "tumblr_ng0781ral21tmnjwco1_400_iu1cw9" },
  { name: "Guest", email: "guest@email.com", password: "password", img_url: "22266877342_d7c8a36ba7_m_icplzt.jpg" },
  { name: "Sheri", email: "sheri@email.com", password: "password", img_url: "10792946_pa2t1c.jpg" },
  { name: "Wilfred", email: "wilfred@email.com", password: "password", img_url: "23947837641_e5456f1850_m_voo3vr.jpg" },
  { name: "Charlie", email: "charlie@email.com", password: "password", img_url: "dayman_fwltjq.jpg"}
  ])

groups = Group.create([
    { title: "Muralists", body: "Spray it, don't Say it", location: "SF", organizer_id: users[10].id, img_url: "7698657394_5731ace6c7_z_cbriux.jpg" },
    { title: "Nature", body: "We are outdoorsy folks who revel in the beauty of hills, fields, & forests.", location: "Northern California", organizer_id: users.first.id, img_url: "2409473_ce363ce06a_z_krvofh.jpg" },
    { title: "Crafting", body: "We are very fond of DIY projects.", location: "San Francisco", organizer_id: users.last.id, img_url: "16346734453_566a8eb441_z_ze4xuy.jpg" },
    { title: "Visual Art", body: "Artists who delve into all spaces & fear no mediums", location: "San Francisco", organizer_id: users[4].id, img_url: "tumblr_mzjxs6u9Le1qgfmj0o1_1280_xrfz7e.jpg" },
    { title: "Crosswords", body: "Sip tea, crossword, repeat.", location: "San Francisco", organizer_id: users[11].id, img_url: "tumblr_lxd99fX4DP1r6rtf4o1_500_g6mvt8.jpg" },
    { title: "Wanderers", body: "Always on the move.", location: "Anywhere but Here", organizer_id: users[1].id, img_url: "tumblr_nm92r4dUvU1rti241o1_1280_g5hwrv.jpg" },
    { title: "Music", body: "Follow the beat.", location: "SF", organizer_id: users[2].id, img_url: "tumblr_nz3adcm0fM1sl55zwo1_1280_qukvyz.jpg" },
    { title: "Architecture", body: "Design and Lines", location: "The City", organizer_id: users[7].id, img_url: "12176326054_9a4d83b2c5_z_od6var.jpg" },
    { title: "Cats", body: "Meow Meow. Purr Purr.", location: "SF", organizer_id: users.last.id, img_url: "8558214796_07be06f26f_z_ds0qwb.jpg" },
    { title: "Foodies", body: "Are you drooling yet?", location: "Bay Area", organizer_id: users[9].id, img_url: "8540091919_6e595e208c_z_mvoltx.jpg" },
    { title: "Baking", body: "Ever searching for that perfect recipe.", location: "Marin", organizer_id: users[9].id, img_url: "15894415502_24e77a46f8_z_glrpkh.jpg" },
    { title: "Travel", body: "Seeking cultural enrichment", location: "All Places", organizer_id: users[9].id, img_url: "15147583330_db238331ea_z_rdl6qc.jpg" },
    { title: "Macro-photos", body: "Close ups or die.", location: "The Bay", organizer_id: users[10].id, img_url: "23428084950_062ab09196_z_hooi7e.jpg" },
    { title: "Gaming", body: "RPG & Strategy mostly.", location: "Our couches", organizer_id: users[2].id, img_url: "22977751956_c326a19278_z_dv9any.jpg" },
    { title: "Photography", body: "It's always the lighting.", location: "City", organizer_id: users[9].id, img_url: "16784804027_fdf9963cb4_z_tcfw9m.jpg" },
    { title: "Beach Goers", body: "Waves. Sand. Salt.", location: "Pacific", organizer_id: users[9].id, img_url: "24011792295_85aaef5203_z_irabv9.jpg" },
    { title: "Coffee", body: "It's not an addiction, it's a lifestyle.", location: "Marin", organizer_id: users[9].id, img_url: "15413836531_2009fbea69_z_igucpx.jpg" },
    { title: "Creeps", body: "We love the word 'moist'.", location: "SF", organizer_id: users[1].id, img_url: "20491926786_35dedb98ec_z_jmu9xn.jpg" },
    ])

Event.create([
  { title: "Mushroom Foraging", body: "Hike and spot the various mushroom species!", location: "Muir Woods", date: DateTime.new(2016,5,21,9,0), group_id: groups[1].id, organizer_id: users.first.id, img_url: "21508192309_c2304bff19_z_tuddmy.jpg"},
  { title: "Sunset Walk", body: "Take in the crisp, salty air on this 5 mile walk.", location: "Bolinas", date: DateTime.new(2016,5,22,17,0), group_id: groups[1].id, organizer_id: users.first.id, img_url: "21473947675_dcaca3b781_z_s0rxkv.jpg"},
  { title: "Pots for Planting", body: "Throw clay for the perfect pot", location: "Ceramic Studio on Castro", date: DateTime.new(2016,5,21,12,0), group_id: groups[2].id, organizer_id: users.last.id, img_url: "tumblr_men7huHU7j1r6furjo1_1280_cts1qn.jpg"},
  { title: "Mad Hatter", body: "Making the wildest of hats to wear on our Un-Birthdays!", location: "Wilfred's House", date: DateTime.new(2016,5,18,14,0), group_id: groups[2].id, organizer_id: users.last.id, img_url: "167764_ba17eee87c_z_kirooi.jpg"},
  { title: "Painting", body: "Paint it up - drip style like Pollack or finger style like when you were 5", location: "Downtown Studio", date: DateTime.new(2016,5,19,16,0), group_id: groups[3].id, organizer_id: users[4].id, img_url: "tumblr_o0b82hxi2v1qa6y0bo1_540_cmgn7y.jpg"},
  { title: "Late Afternoon Photography", body: "Taking it way outdoors to capture nature's essence", location: "Pacifica", date: DateTime.new(2016,5,20,16,0), group_id: groups[3].id, organizer_id: users[4].id, img_url: "21493898355_067b2e4d90_z_msv7gz.jpg"},
  { title: "SF Chronicle's Crossword", body: "Can't wait to open up that the morning paper with y'all.", location: "Philz", date: DateTime.new(2016,5,23,9,0), group_id: groups[4].id, organizer_id: users[11].id, img_url: "tumblr_lfdifaZuX31qd32e5o1_540_oceczw.jpg"},  { title: "P", body: "If it's too windy, smack your coffee mug ontop of that loose corner.", location: "The Sidewalk Cafe", date: DateTime.new(2016,1,14,9,0), group_id: groups[3].id, organizer_id: users[11].id, img_url: "tumblr_lfdifaZuX31qd32e5o1_540_oceczw.jpg"},
  { title: "Oakland Tribune's X-Word", body: "If it's too windy, slap your coffee mug on that loose corner.", location: "The Sidewalk Cafe", date: DateTime.new(2016,5,22,9,0), group_id: groups[4].id, organizer_id: users[11].id, img_url: "tumblr_nmpd0alFSh1qa11wdo1_1280_nsofga.jpg"},
  { title: "Bus to Pacifica", body: "Share bus ride playlists with eachother. See you bright & early. Bring snacks.", location: "Bus Depot", date: DateTime.new(2016,5,19,7,0), group_id: groups[5].id, organizer_id: users[1].id, img_url: "tumblr_n1eus8sWdN1ts2owco1_1280_atfn7p.jpg"},
  { title: "Onwards to Seattle", body: "Let's road trip to Seattle! Bring good food, vibes, and music.", location: "SF->Seattle", date: DateTime.new(2016,5,17,8,0), group_id: groups[5].id, organizer_id: users[1].id, img_url: "21470549373_3e30a878f4_z_u7gxjs.jpg"},
  { title: "Show in the Tenderloin", body: "Get ready to dance and fill your ears with great acoustics.", location: "TL", date: DateTime.new(2016,5,24,20,0), group_id: groups[6].id, organizer_id: users[2].id, img_url: "tumblr_nii5qtOMlq1r6a3q3o1_1280_hb4fej.jpg"},
  { title: "Skyscrapers", body: "Stroll downtown and look up!", location: "FIDI", date: DateTime.new(2016,5,25,20,0), group_id: groups[7].id, organizer_id: users[2].id, img_url: "15554827613_8835f9f930_z_lb4cld.jpg"},
  { title: "Tagging", body: "Be the voice you want to hear", location: "Dogpatch", date: DateTime.new(2016,5,26,18,0), group_id: groups[0].id, organizer_id: users[10].id, img_url: "7698658660_57bdb7dc55_z_daops7.jpg"},
  { title: "Cats + Ice Cream", body: "Watch cats play whilst eating ice cream. Yum!", location: "Cat Cafe", date: DateTime.new(2016,5,11,18,0), group_id: groups[8].id, organizer_id: users.last.id, img_url: "8558214796_07be06f26f_z_ds0qwb.jpg" },
  { title: "Tomatina", body: "Theme = Tomatoes", date: DateTime.new(2016,5,20,18,0), location: "Susan's Kitchen", group_id: groups[9].id, organizer_id: users.last.id, img_url: "15230320080_1af27a20a9_z_jbed5m.jpg" },
  { title: "Spice it up!", body: "Try adding spices to your favorite treats. Yum!", group_id: groups[10].id, date: DateTime.new(2016,5,20,17,0), location: "Suzie's Kitchen", organizer_id: users.last.id, img_url: "16289464513_a61744a4d7_z_kxxtlp.jpg" },
  { title: "Island Hopping", body: "Hops, hopping, pack light.", group_id: groups[11].id, date: DateTime.new(2016,5,6,16,0), location: "Hawaii", organizer_id: users.last.id, img_url: "11635156324_febf69ff9a_z_cgnmmi.jpg" },
  { title: "Point and Shoot", body: "Just got a new lens to play with.", group_id: groups[12].id, date: DateTime.new(2016,5,28,15,0), location: "Rose Garden", organizer_id: users.last.id, img_url: "22880575061_a43a9b1cd1_z_qanq4l.jpg" },
  { title: "Windward", body: "Got a new RPG to test out", group_id: groups[13].id, date: DateTime.new(2016,5,5,14,0), location: "Kevin's Casa", organizer_id: users.last.id, img_url: "6925872019_6f97ebdd72_z_rge91p.jpg" },
  { title: "P&S", body: "Find your muse.", group_id: groups[14].id, date: DateTime.new(2016,5,4,13,0), location: "Dolores Park", organizer_id: users.last.id, img_url: "22948847511_7f83d44d89_z_b9wsgb.jpg" },
  { title: "Beach & Chill", body: "Get some sand b/w the toes, and in your shoes, always.", group_id: groups[15].id, date: DateTime.new(2016,5,2,12,0), location: "Bolinas", organizer_id: users.last.id, img_url: "18016138414_12eaa87ee9_z_wzylr0.jpg" },
  { title: "Six Barrel", body: "New cafe in town, must try the espresso shots", group_id: groups[16].id, date: DateTime.new(2016,5,1,18,0), location: "Kevin's Casa", organizer_id: users.last.id, img_url: "15174519466_271fd8d8b0_z_fcb0pb.jpg" },
  { title: "Snakes", body: "Enough said.", group_id: groups[17].id, date: DateTime.new(2016,5,29,3,0), location: "SF Zoo", organizer_id: users.last.id, img_url: "8584791307_13a992e9e8_z_hzpfn9.jpg" },

  ])

UsersGroup.create([
    { user_id: users[0].id, group_id: groups[0].id },
    { user_id: users[0].id, group_id: groups[1].id },
    { user_id: users[0].id, group_id: groups[2].id },
    { user_id: users[0].id, group_id: groups[4].id },
    { user_id: users[0].id, group_id: groups[5].id },
    { user_id: users[1].id, group_id: groups[0].id },
    { user_id: users[1].id, group_id: groups[2].id },
    { user_id: users[1].id, group_id: groups[4].id },
    { user_id: users[1].id, group_id: groups[5].id },
    { user_id: users[2].id, group_id: groups[1].id },
    { user_id: users[2].id, group_id: groups[2].id },
    { user_id: users[2].id, group_id: groups[3].id },
    { user_id: users[2].id, group_id: groups[5].id },
    { user_id: users[2].id, group_id: groups[6].id },
    { user_id: users[2].id, group_id: groups[7].id },
    { user_id: users[2].id, group_id: groups[8].id },
    { user_id: users[2].id, group_id: groups[9].id },
    { user_id: users[2].id, group_id: groups[10].id },
    { user_id: users[2].id, group_id: groups[11].id },
    { user_id: users[2].id, group_id: groups[12].id },
    { user_id: users[2].id, group_id: groups[13].id },
    { user_id: users[2].id, group_id: groups[14].id },
    { user_id: users[2].id, group_id: groups[15].id },
    { user_id: users[2].id, group_id: groups[16].id },
    { user_id: users[2].id, group_id: groups[17].id },
    { user_id: users[3].id, group_id: groups[0].id },
    { user_id: users[3].id, group_id: groups[2].id },
    { user_id: users[3].id, group_id: groups[3].id },
    { user_id: users[3].id, group_id: groups[4].id },
    { user_id: users[3].id, group_id: groups[5].id },
    { user_id: users[4].id, group_id: groups[1].id },
    { user_id: users[4].id, group_id: groups[2].id },
    { user_id: users[4].id, group_id: groups[4].id },
    { user_id: users[4].id, group_id: groups[5].id },
    { user_id: users[5].id, group_id: groups[0].id },
    { user_id: users[5].id, group_id: groups[1].id },
    { user_id: users[5].id, group_id: groups[2].id },
    { user_id: users[5].id, group_id: groups[3].id },
    { user_id: users[5].id, group_id: groups[4].id },
    { user_id: users[5].id, group_id: groups[5].id },
    { user_id: users[6].id, group_id: groups[0].id },
    { user_id: users[6].id, group_id: groups[1].id },
    { user_id: users[6].id, group_id: groups[2].id },
    { user_id: users[6].id, group_id: groups[3].id },
    { user_id: users[6].id, group_id: groups[4].id },
    { user_id: users[6].id, group_id: groups[5].id },
    { user_id: users[7].id, group_id: groups[0].id },
    { user_id: users[7].id, group_id: groups[1].id },
    { user_id: users[7].id, group_id: groups[2].id },
    { user_id: users[7].id, group_id: groups[3].id },
    { user_id: users[7].id, group_id: groups[5].id },
    { user_id: users[7].id, group_id: groups[6].id },
    { user_id: users[7].id, group_id: groups[7].id },
    { user_id: users[7].id, group_id: groups[8].id },
    { user_id: users[7].id, group_id: groups[9].id },
    { user_id: users[7].id, group_id: groups[10].id },
    { user_id: users[7].id, group_id: groups[11].id },
    { user_id: users[7].id, group_id: groups[12].id },
    { user_id: users[7].id, group_id: groups[13].id },
    { user_id: users[7].id, group_id: groups[14].id },
    { user_id: users[7].id, group_id: groups[15].id },
    { user_id: users[7].id, group_id: groups[16].id },
    { user_id: users[7].id, group_id: groups[17].id },
    { user_id: users[8].id, group_id: groups[2].id },
    { user_id: users[8].id, group_id: groups[3].id },
    { user_id: users[8].id, group_id: groups[5].id },
    { user_id: users[8].id, group_id: groups[6].id },
    { user_id: users[8].id, group_id: groups[7].id },
    { user_id: users[8].id, group_id: groups[8].id },
    { user_id: users[8].id, group_id: groups[9].id },
    { user_id: users[8].id, group_id: groups[15].id },
    { user_id: users[8].id, group_id: groups[16].id },
    { user_id: users[8].id, group_id: groups[17].id },
    { user_id: users[9].id, group_id: groups[1].id },
    { user_id: users[9].id, group_id: groups[5].id },
    { user_id: users[9].id, group_id: groups[6].id },
    { user_id: users[9].id, group_id: groups[7].id },
    { user_id: users[9].id, group_id: groups[8].id },
    { user_id: users[9].id, group_id: groups[9].id },
    { user_id: users[9].id, group_id: groups[10].id },
    { user_id: users[9].id, group_id: groups[11].id },
    { user_id: users[9].id, group_id: groups[13].id },
    { user_id: users[9].id, group_id: groups[14].id },
    { user_id: users[9].id, group_id: groups[15].id },
    { user_id: users[10].id, group_id: groups[0].id },
    { user_id: users[10].id, group_id: groups[1].id },
    { user_id: users[10].id, group_id: groups[2].id },
    { user_id: users[10].id, group_id: groups[3].id },
    { user_id: users[10].id, group_id: groups[4].id },
    { user_id: users[10].id, group_id: groups[5].id },
    { user_id: users[10].id, group_id: groups[6].id },
    { user_id: users[10].id, group_id: groups[7].id },
    { user_id: users[10].id, group_id: groups[8].id },
    { user_id: users[10].id, group_id: groups[9].id },
    { user_id: users[10].id, group_id: groups[10].id },
    { user_id: users[10].id, group_id: groups[11].id },
    { user_id: users[10].id, group_id: groups[12].id },
    { user_id: users[10].id, group_id: groups[13].id },
    { user_id: users[10].id, group_id: groups[14].id },
    { user_id: users[10].id, group_id: groups[15].id },
    { user_id: users[10].id, group_id: groups[16].id },
    { user_id: users[10].id, group_id: groups[17].id },
    { user_id: users[11].id, group_id: groups[0].id },
    { user_id: users[11].id, group_id: groups[1].id },
    { user_id: users[11].id, group_id: groups[2].id },
    { user_id: users[11].id, group_id: groups[3].id },
    { user_id: users[11].id, group_id: groups[4].id },
    { user_id: users[11].id, group_id: groups[5].id },
    { user_id: users[11].id, group_id: groups[6].id },
    { user_id: users[11].id, group_id: groups[7].id },
    { user_id: users[11].id, group_id: groups[8].id },
    { user_id: users[11].id, group_id: groups[9].id },
    { user_id: users[11].id, group_id: groups[10].id },
    { user_id: users[11].id, group_id: groups[11].id },
    { user_id: users[11].id, group_id: groups[12].id },
    { user_id: users[11].id, group_id: groups[13].id },
    { user_id: users[11].id, group_id: groups[14].id },
    { user_id: users[11].id, group_id: groups[15].id },
    { user_id: users[11].id, group_id: groups[16].id },
    { user_id: users[11].id, group_id: groups[17].id },
    { user_id: users[12].id, group_id: groups[0].id },
    { user_id: users[12].id, group_id: groups[1].id },
    { user_id: users[12].id, group_id: groups[2].id },
    { user_id: users[12].id, group_id: groups[3].id },
    { user_id: users[12].id, group_id: groups[4].id },
    { user_id: users[12].id, group_id: groups[5].id },
    { user_id: users[12].id, group_id: groups[6].id },
    { user_id: users[12].id, group_id: groups[7].id },
    { user_id: users[12].id, group_id: groups[8].id },
    { user_id: users[12].id, group_id: groups[9].id },
    { user_id: users[12].id, group_id: groups[10].id },
    { user_id: users[12].id, group_id: groups[11].id },
    { user_id: users[12].id, group_id: groups[12].id },
    { user_id: users[12].id, group_id: groups[13].id },
    { user_id: users[12].id, group_id: groups[14].id },
    { user_id: users[12].id, group_id: groups[15].id },
    { user_id: users[12].id, group_id: groups[16].id },
    { user_id: users[12].id, group_id: groups[17].id },
])

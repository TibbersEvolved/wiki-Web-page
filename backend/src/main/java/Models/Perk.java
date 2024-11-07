package Models;

public class Perk {
    private int id;
    private String name;
    private String imageLink;
    private String description;
    private String rarity;

    public Perk(String name, String imageLink, String description, String rarity) {
        this.name = name;
        this.imageLink = imageLink;
        this.description = description;
        this.rarity = rarity;
    }


}

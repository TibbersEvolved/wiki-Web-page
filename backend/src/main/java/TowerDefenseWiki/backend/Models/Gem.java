package TowerDefenseWiki.backend.Models;
import jakarta.persistence.*;

@Entity
public class Gem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;
    @Column(name = "imageLink")
    private String imageLink;
    @Column(name = "description")
    private String description;
    @Column(name = "rarity")
    private String rarity;

    public Gem () {
    }
    public Gem(String name, String imageLink, String description, String rarity) {
        this.name = name;
        this.imageLink = imageLink;
        this.description = description;
        this.rarity = rarity;
    }

    public String getName() {
        return name;
    }

    public String getImageLink() {
        return imageLink;
    }

    public String getDescription() {
        return description;
    }

    public String getRarity() {
        return rarity;
    }

    public Long getId() {
        return id;
    }
}

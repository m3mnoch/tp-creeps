import { createElement } from "metaverse-api";

const StaticEntities = (props: JSX.BaseEntity) => {
    return (
        <scene>
            <material id="shadow" albedoTexture={"assets/images/shadow.png"} alpha={1} />
            <material id="grass" albedoTexture={"assets/images/grass.jpg"} />
            <material id="path-ns" albedoTexture={"assets/images/DL_path_V.png"} />
            <material id="path-ew" albedoTexture={"assets/images/DL_path_H.png"} />
            <material id="path-ne" albedoTexture={"assets/images/DL_path_SW.png"} />
            <material id="path-nw" albedoTexture={"assets/images/DL_path_SE.png"} />
            <material id="path-se" albedoTexture={"assets/images/DL_path_NW.png"} />
            <material id="path-sw" albedoTexture={"assets/images/DL_path_NE.png"} />
            <plane
                position={{ x: 2.501, y: 0, z: 2.501 }}
                scale={{ x: 5, y: 5, z: 1 }}
                rotation={{ x: 90, y: 0, z: 0 }}
                material="#grass"
                ignoreCollisions={true}
            />
            <plane
                position={{ x: 2.501, y: 0, z: 7.5 }}
                scale={{ x: 5, y: 5, z: 1 }}
                rotation={{ x: 90, y: 0, z: 0 }}
                material="#grass"
                ignoreCollisions={true}
            />
            <plane
                position={{ x: 2.501, y: 0, z: 12.5 }}
                scale={{ x: 5, y: 5, z: 1 }}
                rotation={{ x: 90, y: 0, z: 0 }}
                material="#grass"
                ignoreCollisions={true}
            />
            <plane
                position={{ x: 2.501, y: 0, z: 17.5 }}
                scale={{ x: 5, y: 5, z: 1 }}
                rotation={{ x: 90, y: 0, z: 0 }}
                material="#grass"
                ignoreCollisions={true}
            />
            <plane
                position={{ x: 2.501, y: 0, z: 22.5 }}
                scale={{ x: 5, y: 5, z: 1 }}
                rotation={{ x: 90, y: 0, z: 0 }}
                material="#grass"
                ignoreCollisions={true}
            />
            <plane
                position={{ x: 2.501, y: 0, z: 27.499 }}
                scale={{ x: 5, y: 5, z: 1 }}
                rotation={{ x: 90, y: 0, z: 0 }}
                material="#grass"
                ignoreCollisions={true}
            />

            <plane
                position={{ x: 7.5, y: 0, z: 2.501 }}
                scale={{ x: 5, y: 5, z: 1 }}
                rotation={{ x: 90, y: 0, z: 0 }}
                material="#grass"
                ignoreCollisions={true}
            />
            <plane
                position={{ x: 7.5, y: 0, z: 7.5 }}
                scale={{ x: 5, y: 5, z: 1 }}
                rotation={{ x: 90, y: 0, z: 0 }}
                material="#grass"
                ignoreCollisions={true}
            />
            <plane
                position={{ x: 7.5, y: 0, z: 12.5 }}
                scale={{ x: 5, y: 5, z: 1 }}
                rotation={{ x: 90, y: 0, z: 0 }}
                material="#grass"
                ignoreCollisions={true}
            />
            <plane
                position={{ x: 7.5, y: 0, z: 17.5 }}
                scale={{ x: 5, y: 5, z: 1 }}
                rotation={{ x: 90, y: 0, z: 0 }}
                material="#grass"
                ignoreCollisions={true}
            />
            <plane
                position={{ x: 7.5, y: 0, z: 22.5 }}
                scale={{ x: 5, y: 5, z: 1 }}
                rotation={{ x: 90, y: 0, z: 0 }}
                material="#grass"
                ignoreCollisions={true}
            />
            <plane
                position={{ x: 7.5, y: 0, z: 27.499 }}
                scale={{ x: 5, y: 5, z: 1 }}
                rotation={{ x: 90, y: 0, z: 0 }}
                material="#grass"
                ignoreCollisions={true}
            />

            <plane
                position={{ x: 12.5, y: 0, z: 2.501 }}
                scale={{ x: 5, y: 5, z: 1 }}
                rotation={{ x: 90, y: 0, z: 0 }}
                material="#grass"
                ignoreCollisions={true}
            />
            <plane
                position={{ x: 12.5, y: 0, z: 7.5 }}
                scale={{ x: 5, y: 5, z: 1 }}
                rotation={{ x: 90, y: 0, z: 0 }}
                material="#grass"
                ignoreCollisions={true}
            />
            <plane
                position={{ x: 12.5, y: 0, z: 12.5 }}
                scale={{ x: 5, y: 5, z: 1 }}
                rotation={{ x: 90, y: 0, z: 0 }}
                material="#grass"
                ignoreCollisions={true}
            />
            <plane
                position={{ x: 12.5, y: 0, z: 17.5 }}
                scale={{ x: 5, y: 5, z: 1 }}
                rotation={{ x: 90, y: 0, z: 0 }}
                material="#grass"
                ignoreCollisions={true}
            />
            <plane
                position={{ x: 12.5, y: 0, z: 22.5 }}
                scale={{ x: 5, y: 5, z: 1 }}
                rotation={{ x: 90, y: 0, z: 0 }}
                material="#grass"
                ignoreCollisions={true}
            />
            <plane
                position={{ x: 12.5, y: 0, z: 27.499 }}
                scale={{ x: 5, y: 5, z: 1 }}
                rotation={{ x: 90, y: 0, z: 0 }}
                material="#grass"
                ignoreCollisions={true}
            />

            <plane
                position={{ x: 17.5, y: 0, z: 2.501 }}
                scale={{ x: 5, y: 5, z: 1 }}
                rotation={{ x: 90, y: 0, z: 0 }}
                material="#grass"
                ignoreCollisions={true}
            />
            <plane
                position={{ x: 17.5, y: 0, z: 7.5 }}
                scale={{ x: 5, y: 5, z: 1 }}
                rotation={{ x: 90, y: 0, z: 0 }}
                material="#grass"
                ignoreCollisions={true}
            />
            <plane
                position={{ x: 17.5, y: 0, z: 12.5 }}
                scale={{ x: 5, y: 5, z: 1 }}
                rotation={{ x: 90, y: 0, z: 0 }}
                material="#grass"
                ignoreCollisions={true}
            />
            <plane
                position={{ x: 17.5, y: 0, z: 17.5 }}
                scale={{ x: 5, y: 5, z: 1 }}
                rotation={{ x: 90, y: 0, z: 0 }}
                material="#grass"
                ignoreCollisions={true}
            />
            <plane
                position={{ x: 17.5, y: 0, z: 22.5 }}
                scale={{ x: 5, y: 5, z: 1 }}
                rotation={{ x: 90, y: 0, z: 0 }}
                material="#grass"
                ignoreCollisions={true}
            />
            <plane
                position={{ x: 17.5, y: 0, z: 27.499 }}
                scale={{ x: 5, y: 5, z: 1 }}
                rotation={{ x: 90, y: 0, z: 0 }}
                material="#grass"
                ignoreCollisions={true}
            />

            <plane
                position={{ x: 22.5, y: 0, z: 2.501 }}
                scale={{ x: 5, y: 5, z: 1 }}
                rotation={{ x: 90, y: 0, z: 0 }}
                material="#grass"
                ignoreCollisions={true}
            />
            <plane
                position={{ x: 22.5, y: 0, z: 7.5 }}
                scale={{ x: 5, y: 5, z: 1 }}
                rotation={{ x: 90, y: 0, z: 0 }}
                material="#grass"
                ignoreCollisions={true}
            />
            <plane
                position={{ x: 22.5, y: 0, z: 12.5 }}
                scale={{ x: 5, y: 5, z: 1 }}
                rotation={{ x: 90, y: 0, z: 0 }}
                material="#grass"
                ignoreCollisions={true}
            />
            <plane
                position={{ x: 22.5, y: 0, z: 17.5 }}
                scale={{ x: 5, y: 5, z: 1 }}
                rotation={{ x: 90, y: 0, z: 0 }}
                material="#grass"
                ignoreCollisions={true}
            />
            <plane
                position={{ x: 22.5, y: 0, z: 22.5 }}
                scale={{ x: 5, y: 5, z: 1 }}
                rotation={{ x: 90, y: 0, z: 0 }}
                material="#grass"
                ignoreCollisions={true}
            />
            <plane
                position={{ x: 22.5, y: 0, z: 27.499 }}
                scale={{ x: 5, y: 5, z: 1 }}
                rotation={{ x: 90, y: 0, z: 0 }}
                material="#grass"
                ignoreCollisions={true}
            />

            <plane
                position={{ x: 27.499, y: 0, z: 2.501 }}
                scale={{ x: 5, y: 5, z: 1 }}
                rotation={{ x: 90, y: 0, z: 0 }}
                material="#grass"
                ignoreCollisions={true}
            />
            <plane
                position={{ x: 27.499, y: 0, z: 7.5 }}
                scale={{ x: 5, y: 5, z: 1 }}
                rotation={{ x: 90, y: 0, z: 0 }}
                material="#grass"
                ignoreCollisions={true}
            />
            <plane
                position={{ x: 27.499, y: 0, z: 12.5 }}
                scale={{ x: 5, y: 5, z: 1 }}
                rotation={{ x: 90, y: 0, z: 0 }}
                material="#grass"
                ignoreCollisions={true}
            />
            <plane
                position={{ x: 27.499, y: 0, z: 17.5 }}
                scale={{ x: 5, y: 5, z: 1 }}
                rotation={{ x: 90, y: 0, z: 0 }}
                material="#grass"
                ignoreCollisions={true}
            />
            <plane
                position={{ x: 27.499, y: 0, z: 22.5 }}
                scale={{ x: 5, y: 5, z: 1 }}
                rotation={{ x: 90, y: 0, z: 0 }}
                material="#grass"
                ignoreCollisions={true}
            />
            <plane
                position={{ x: 27.499, y: 0, z: 27.499 }}
                scale={{ x: 5, y: 5, z: 1 }}
                rotation={{ x: 90, y: 0, z: 0 }}
                material="#grass"
                ignoreCollisions={true}
            />
        </scene>
    );
};

export default StaticEntities;
